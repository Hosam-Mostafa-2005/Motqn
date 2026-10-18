import React, { useState } from "react";
import { useAppStore } from "../../store/useAppStore";
import AudioRecorder from "../../components/common/AudioRecorder";
import {
  FaMicrophoneAlt,
  FaPlay,
  FaPause,
  FaStar,
  FaCheckCircle,
  FaBookOpen,
} from "react-icons/fa";
import { GiPrayerBeads, GiLantern, GiStarsStack } from "react-icons/gi";

// Authentic Quran Surahs for demonstration practice
const SURAH_TEXTS = {
  "الفاتحة": {
    name: "سورة الفاتحة",
    ayahs: "1 إلى 7",
    verses: [
      "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
      "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
      "الرَّحْمَٰنِ الرَّحِيمِ",
      "مَالِكِ يَوْمِ الدِّينِ",
      "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ",
      "اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ",
      "صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ",
    ],
  },
  "المسد": {
    name: "سورة المسد",
    ayahs: "1 إلى 5",
    verses: [
      "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
      "تَبَّتْ يَدَا أَبِي لَهَبٍ وَتَبَّ",
      "مَا أَغْنَىٰ عَنْهُ مَالُهُ وَمَا كَسَبَ",
      "سَيَصْلَىٰ نَارًا ذَاتَ لَهَبٍ",
      "وَامْرَأَتُهُ حَمَّالَةَ الْحَطَبِ",
      "فِي جِيدِهَا حَبْلٌ مِّن مَّسَدٍ",
    ],
  },
  "الإخلاص": {
    name: "سورة الإخلاص",
    ayahs: "1 إلى 4",
    verses: [
      "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
      "قُلْ هُوَ اللَّهُ أَحَدٌ",
      "اللَّهُ الصَّمَدُ",
      "لَمْ يَلِدْ وَلَمْ يُولَدْ",
      "وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ",
    ],
  },
  "الفلق": {
    name: "سورة الفلق",
    ayahs: "1 إلى 5",
    verses: [
      "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
      "قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ",
      "مِن شَرِّ مَا خَلَقَ",
      "وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ",
      "وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ",
      "وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ",
    ],
  },
  "الناس": {
    name: "سورة الناس",
    ayahs: "1 إلى 6",
    verses: [
      "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
      "قُلْ أَعُوذُ بِرَبِّ النَّاسِ",
      "مَلِكِ النَّاسِ",
      "إِلَٰهِ النَّاسِ",
      "مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ",
      "الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ",
      "مِنَ الْجِنَّةِ وَالنَّاسِ",
    ],
  },
};

const StudentPractice = () => {
  const { getActiveChild } = useAppStore();
  const child = getActiveChild();

  const [selectedSurahKey, setSelectedSurahKey] = useState("المسد");
  const [playingAudioId, setPlayingAudioId] = useState(null);

  const activeSurah = SURAH_TEXTS[selectedSurahKey] || SURAH_TEXTS["المسد"];

  return (
    <div className="space-y-8 font-tajawal text-right pb-16" dir="rtl">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#0B122B] to-[#1E3A8A] text-white p-6 sm:p-8 rounded-[2.5rem] shadow-xl border-b-4 border-yellow-500">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs bg-yellow-500 text-[#0B122B] px-2.5 py-0.5 rounded-full font-black">
                استوديو القرآن الكريم
              </span>
              <span className="text-xs text-blue-200">القارئ: {child.name}</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-white">
              تدريب وتصحيح التلاوة اليومي
            </h1>
            <p className="text-blue-200 text-xs mt-1">
              اختر السورة، اقرأ بتمهل، وسجل تلاوتك بصوتك ليراجعها شيخك المعتمد
            </p>
          </div>

          <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-2xl border border-white/20">
            <GiStarsStack className="text-yellow-400 text-2xl" />
            <div>
              <span className="text-[10px] text-blue-200 block">مكافأة التسجيل</span>
              <strong className="text-sm font-black text-white">+30 حسنة</strong>
            </div>
          </div>
        </div>
      </div>

      {/* Surah Selector Tabs */}
      <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
        <label className="text-xs font-bold text-gray-500 block mb-2">اختر السورة للتدريب والتسجيل:</label>
        <div className="flex flex-wrap gap-2">
          {Object.keys(SURAH_TEXTS).map((sKey) => (
            <button
              key={sKey}
              onClick={() => setSelectedSurahKey(sKey)}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedSurahKey === sKey
                  ? "bg-[#0B122B] text-yellow-400 font-black shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {SURAH_TEXTS[sKey].name}
            </button>
          ))}
        </div>
      </div>

      {/* Quran Verses Display Board */}
      <div className="bg-[#FFFDF7] rounded-[2.5rem] p-8 md:p-12 shadow-lg border-2 border-yellow-200 text-center relative overflow-hidden">
        <div className="max-w-2xl mx-auto space-y-6">
          <div className="inline-block px-6 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-800 font-black text-sm">
            {activeSurah.name} ({activeSurah.ayahs})
          </div>

          <div className="space-y-4 py-4 font-serif text-2xl sm:text-3xl text-gray-900 leading-[2.2] tracking-wide select-none">
            {activeSurah.verses.map((verse, idx) => (
              <p key={idx} className="hover:text-blue-800 transition-colors">
                {verse} <span className="text-yellow-600 text-lg font-bold">﴿{idx === 0 ? "۝" : idx}﴾</span>
              </p>
            ))}
          </div>

          <div className="pt-4 border-t border-yellow-200/60 text-xs text-gray-500 font-sans font-bold flex items-center justify-center gap-2">
            <GiPrayerBeads className="text-yellow-600 text-lg" />
            <span>نصيحة الشيخ: خذ نفساً عميقاً، ولا تستعجل، واقرأ بهدوء وترتيل.</span>
          </div>
        </div>
      </div>

      {/* Embedded Real Audio Recorder */}
      <AudioRecorder
        surah={activeSurah.name}
        ayahs={activeSurah.ayahs}
      />

      {/* Child's History of Recordings and Feedback */}
      <div className="bg-white rounded-[2.5rem] p-6 sm:p-8 shadow-xl border border-blue-50 space-y-6">
        <div className="flex items-center justify-between pb-3 border-b border-gray-100">
          <h3 className="text-xl font-black text-blue-900 flex items-center gap-2">
            <FaMicrophoneAlt className="text-blue-600" /> تلاواتي السابقة وملاحظات الشيخ
          </h3>
          <span className="text-xs text-gray-500 font-bold">
            {child.recordings?.length || 0} تسجيلات
          </span>
        </div>

        {child.recordings && child.recordings.length > 0 ? (
          <div className="space-y-4">
            {child.recordings.map((rec) => (
              <div
                key={rec.id}
                className="p-5 rounded-2xl bg-blue-50/40 border border-blue-100 space-y-3"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() =>
                        setPlayingAudioId(playingAudioId === rec.id ? null : rec.id)
                      }
                      className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm shadow hover:bg-blue-700 transition-colors"
                    >
                      {playingAudioId === rec.id ? <FaPause /> : <FaPlay className="mr-0.5" />}
                    </button>
                    <div>
                      <h4 className="font-bold text-sm text-blue-900">{rec.surah}</h4>
                      <span className="text-[11px] text-gray-500">{rec.date} • {rec.duration}</span>
                    </div>
                  </div>

                  {rec.rating ? (
                    <div className="flex items-center gap-1 bg-yellow-100 text-yellow-800 px-3 py-1 rounded-xl text-xs font-black">
                      <FaStar className="text-yellow-500" /> {rec.rating} / 5
                    </div>
                  ) : (
                    <span className="bg-yellow-50 text-yellow-800 border border-yellow-200 px-3 py-1 rounded-xl text-xs font-bold">
                      بانتظار استماع الشيخ
                    </span>
                  )}
                </div>

                <div className="p-3 bg-white rounded-xl text-xs text-gray-700 leading-relaxed italic border-r-4 border-yellow-400">
                  <strong>تعليق الشيخ:</strong> "{rec.teacherFeedback}"
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-10 text-gray-400 text-sm">
            لا توجد تسجيلات بعد. ابدأ الآن بتسجيل أول سورة بأعلاه!
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentPractice;
