import React, { useState, useRef, useEffect } from "react";
import { useAppStore } from "../../store/useAppStore";
import {
  FaMicrophone,
  FaStop,
  FaPlay,
  FaPause,
  FaRedo,
  FaPaperPlane,
  FaCheckCircle,
  FaExclamationCircle,
} from "react-icons/fa";
import { GiPrayerBeads, GiStarsStack } from "react-icons/gi";

const AudioRecorder = ({
  surah = "سورة الفاتحة",
  ayahs = "الآيات 1 إلى 7",
  onRecordingSubmitted,
}) => {
  const { getActiveChild, addStudentRecording } = useAppStore();
  const activeChild = getActiveChild();

  const [recordingState, setRecordingState] = useState("idle"); // 'idle' | 'recording' | 'recorded' | 'submitted'
  const [timer, setTimer] = useState(0);
  const [audioUrl, setAudioUrl] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);
  const timerIntervalRef = useRef(null);
  const audioElementRef = useRef(null);

  // Clean up timer on unmount
  useEffect(() => {
    return () => {
      if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
    };
  }, []);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const startRecording = async () => {
    setErrorMessage("");
    audioChunksRef.current = [];
    setTimer(0);

    try {
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        const mediaRecorder = new MediaRecorder(stream);
        mediaRecorderRef.current = mediaRecorder;

        mediaRecorder.ondataavailable = (event) => {
          if (event.data.size > 0) {
            audioChunksRef.current.push(event.data);
          }
        };

        mediaRecorder.onstop = () => {
          const audioBlob = new Blob(audioChunksRef.current, { type: "audio/webm" });
          const url = URL.createObjectURL(audioBlob);
          setAudioUrl(url);
          setRecordingState("recorded");

          // Stop mic tracks
          stream.getTracks().forEach((track) => track.stop());
        };

        mediaRecorder.start();
        setRecordingState("recording");

        timerIntervalRef.current = setInterval(() => {
          setTimer((prev) => prev + 1);
        }, 1000);
      } else {
        // Fallback simulated recording
        setRecordingState("recording");
        timerIntervalRef.current = setInterval(() => {
          setTimer((prev) => prev + 1);
        }, 1000);
      }
    } catch (err) {
      console.warn("Microphone access error:", err);
      // Fallback: simulated recording for demonstration environment
      setRecordingState("recording");
      timerIntervalRef.current = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);
    }
  };

  const stopRecording = () => {
    if (timerIntervalRef.current) {
      clearInterval(timerIntervalRef.current);
    }

    if (mediaRecorderRef.current && mediaRecorderRef.current.state === "recording") {
      mediaRecorderRef.current.stop();
    } else {
      // simulated stop
      setRecordingState("recorded");
      setAudioUrl("simulated");
    }
  };

  const resetRecording = () => {
    if (audioElementRef.current) {
      audioElementRef.current.pause();
    }
    setAudioUrl(null);
    setTimer(0);
    setIsPlaying(false);
    setRecordingState("idle");
    setErrorMessage("");
  };

  const togglePlayback = () => {
    if (!audioElementRef.current) return;
    if (isPlaying) {
      audioElementRef.current.pause();
      setIsPlaying(false);
    } else {
      audioElementRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleSubmitRecording = () => {
    if (recordingState !== "recorded") return;

    addStudentRecording({
      childId: activeChild.id,
      surah,
      ayahs,
      audioBlobUrl: audioUrl,
      duration: formatTime(timer || 35),
    });

    setRecordingState("submitted");
    if (onRecordingSubmitted) {
      onRecordingSubmitted();
    }
  };

  return (
    <div className="bg-white rounded-[2.5rem] p-6 md:p-8 shadow-xl border-2 border-blue-50 text-right font-tajawal relative overflow-hidden" dir="rtl">
      {/* Waveform accent top */}
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
        <div>
          <span className="text-xs font-bold text-yellow-600 bg-yellow-50 px-3 py-1 rounded-full border border-yellow-200">
            استوديو تصحيح التلاوة
          </span>
          <h3 className="text-2xl font-black text-blue-900 mt-2">
            تسجيل: {surah} ({ayahs})
          </h3>
          <p className="text-xs text-gray-500 mt-1">
            سجل بصوتك بوضوح وتؤدة، وسيقوم الشيخ بمراجعة مخارج الحروف وإرسال الملاحظات
          </p>
        </div>

        <div className="text-left">
          <div className="text-xs text-gray-400 font-bold">القارئ الصغير</div>
          <div className="text-base font-black text-blue-900">{activeChild.name}</div>
        </div>
      </div>

      {errorMessage && (
        <div className="mb-4 p-3 bg-red-50 text-red-700 text-xs rounded-xl flex items-center gap-2 border border-red-100">
          <FaExclamationCircle /> {errorMessage}
        </div>
      )}

      {/* Main Recording Interactive Arena */}
      <div className="bg-gradient-to-br from-[#0B122B] to-[#111A38] text-white rounded-3xl p-8 text-center relative overflow-hidden my-6">
        {/* Animated Sound Wave simulation */}
        <div className="flex items-center justify-center gap-1.5 h-20 mb-6">
          {[20, 45, 75, 30, 90, 60, 40, 85, 55, 95, 35, 70, 45, 80, 25, 60, 30].map(
            (barHeight, idx) => (
              <div
                key={idx}
                className={`w-2 rounded-full transition-all duration-300 ${
                  recordingState === "recording"
                    ? "bg-yellow-400 animate-pulse"
                    : recordingState === "recorded"
                    ? "bg-blue-400 opacity-60"
                    : "bg-white/20"
                }`}
                style={{
                  height:
                    recordingState === "recording"
                      ? `${Math.max(15, (barHeight * (timer % 5 + 1)) / 5)}px`
                      : recordingState === "recorded"
                      ? `${barHeight * 0.5}px`
                      : "12px",
                }}
              />
            )
          )}
        </div>

        {/* Timer display */}
        <div className="font-mono text-3xl font-black text-yellow-400 mb-6 tracking-widest">
          {formatTime(timer)}
        </div>

        {/* Action Controls based on State */}
        <div className="flex items-center justify-center gap-4">
          {recordingState === "idle" && (
            <button
              onClick={startRecording}
              className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-black text-lg shadow-xl shadow-red-500/30 transition-all hover:scale-105"
            >
              <FaMicrophone className="text-xl" /> ابدأ التسجيل الآن
            </button>
          )}

          {recordingState === "recording" && (
            <button
              onClick={stopRecording}
              className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-yellow-500 hover:bg-yellow-400 text-[#0B122B] font-black text-lg shadow-xl shadow-yellow-500/30 transition-all animate-pulse"
            >
              <FaStop /> إيقاف التسجيل
            </button>
          )}

          {recordingState === "recorded" && (
            <div className="flex flex-wrap items-center justify-center gap-3">
              {audioUrl !== "simulated" && audioUrl && (
                <audio
                  ref={audioElementRef}
                  src={audioUrl}
                  onEnded={() => setIsPlaying(false)}
                  className="hidden"
                />
              )}

              <button
                onClick={togglePlayback}
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold transition-all text-sm"
              >
                {isPlaying ? <FaPause /> : <FaPlay />}
                <span>{isPlaying ? "إيقاف مؤقت" : "استماع لتسجيلك"}</span>
              </button>

              <button
                onClick={resetRecording}
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-gray-200 font-bold transition-all text-sm"
              >
                <FaRedo /> إعادة التسجيل
              </button>

              <button
                onClick={handleSubmitRecording}
                className="flex items-center gap-2 px-8 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-black transition-all shadow-lg shadow-emerald-500/30 text-sm hover:scale-105"
              >
                <FaPaperPlane /> إرسال للشيخ (+30 حسنة)
              </button>
            </div>
          )}

          {recordingState === "submitted" && (
            <div className="bg-emerald-900/60 border border-emerald-500/40 p-4 rounded-2xl text-center space-y-2">
              <div className="flex items-center justify-center gap-2 text-emerald-400 font-black text-lg">
                <FaCheckCircle className="text-xl" /> تم إرسال التلاوة بنجاح!
              </div>
              <p className="text-xs text-emerald-200">
                حصلت على <strong className="text-yellow-400 font-bold">+30 حسنة</strong>! سيستمع الشيخ لتلاوتك ويكتب ملاحظاته.
              </p>
              <button
                onClick={resetRecording}
                className="mt-2 text-xs bg-white/10 hover:bg-white/20 px-4 py-1.5 rounded-lg text-white font-bold"
              >
                تسجيل مقطع آخر
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Honest educational notice (per section 12 requirement) */}
      <div className="bg-blue-50/70 p-4 rounded-2xl border border-blue-100 flex items-start gap-3 text-xs text-blue-900 leading-relaxed">
        <GiPrayerBeads className="text-2xl text-yellow-600 flex-shrink-0 mt-0.5" />
        <div>
          <strong className="block font-black mb-0.5">التصحيح البشري المعتمد:</strong>
          في "مُتقن"، نستعين بالمشايخ والمقرئين الحقيقيين لسماع تلاوة طفلك وتصحيح مخارج الحروف وأحكام التجويد بدقة، بدلاً من التقييم الآلي المجرد.
        </div>
      </div>
    </div>
  );
};

export default AudioRecorder;
