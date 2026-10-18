import { create } from "zustand";
import { persist } from "zustand/middleware";

// Initial Sheikhs / Teachers demo data
export const INITIAL_TEACHERS = [
  {
    id: 1,
    name: "الشيخ عبد الرحمن السعدي",
    title: "مُقرئ بالقراءات العشر ومُعلم معتمد",
    rating: 5.0,
    reviewCount: 120,
    students: 210,
    experience: "15 سنة",
    specialty: "إجازة في القراءات العشر وتصحيح التلاوة",
    image: "/man.png",
    hourlyPrice: 250,
    price: "250 ج.م / ساعة",
    verified: true,
    bio: "حافظ لكتاب الله بالقراءات العشر الصغرى والكبرى، مجاز من كبار علماء الأزهر الشريف. خبرة 15 عاماً في تحفيظ الأطفال وتأسيس مخارج الحروف بطريقة علمية مبسطة وبأسلوب حنون يشجع الطفل على حب القرآن.",
    tags: ["صبور", "مخارج حروف", "إجازة معتمدة", "أزهر شريف"],
    availableSlots: [
      { id: "s1", day: "اليوم", time: "04:00 م" },
      { id: "s2", day: "اليوم", time: "06:00 م" },
      { id: "s3", day: "غداً", time: "05:00 م" },
      { id: "s4", day: "غداً", time: "07:30 م" },
      { id: "s5", day: "السبت", time: "03:30 م" },
    ],
    sampleRecitation: "سورة الفاتحة - ترتيل برواية حفص عن عاصم",
  },
  {
    id: 2,
    name: "الشيخ يوسف القاضي",
    title: "متخصص القاعدة النورانية وبناء شخصية الطفل",
    rating: 4.8,
    reviewCount: 95,
    students: 145,
    experience: "8 سنوات",
    specialty: "تحفيظ القاعدة النورانية وتأسيس الهجاء",
    image: "/man.png",
    hourlyPrice: 180,
    price: "180 ج.م / ساعة",
    verified: true,
    bio: "متخصص في تأسيس الأطفال من سن 4 إلى 9 سنوات باستخدام أحدث الأساليب التفاعلية والقصصية. بارع في معالجة التأتأة وصعوبات نطق الحروف اللثوية والمفخمة.",
    tags: ["مرح", "أسلوب قصصي", "صغار السن", "القاعدة النورانية"],
    availableSlots: [
      { id: "s6", day: "اليوم", time: "05:30 م" },
      { id: "s7", day: "غداً", time: "04:00 م" },
      { id: "s8", day: "الأحد", time: "06:00 م" },
    ],
    sampleRecitation: "سورة النبأ - ترتيل تعليمي للأطفال",
  },
  {
    id: 3,
    name: "الشيخ عمر الفاروق",
    title: "مُحفظ معتمد وخبير التجويد العملي",
    rating: 4.7,
    reviewCount: 60,
    students: 90,
    experience: "6 سنوات",
    specialty: "تجويد مكثف ومتابعة يومية للحفظ",
    image: "/man.png",
    hourlyPrice: 160,
    price: "160 ج.م / ساعة",
    verified: true,
    bio: "خريج كلية القرآن الكريم بطنطا. يركز على التطبيق العملي لأحكام التجويد (المدود، الغنن، الإقلاب) مع متابعة يومية منتظمة وتدريب الطفل على تسجيل ورده باستمرار.",
    tags: ["دقيق", "متابعة يومية", "تجويد عملي"],
    availableSlots: [
      { id: "s9", day: "غداً", time: "03:00 م" },
      { id: "s10", day: "الجمعة", time: "05:00 م" },
    ],
    sampleRecitation: "سورة الملك - أداء خاشع",
  },
  {
    id: 4,
    name: "الشيخ صابر المشرفي",
    title: "معلم التلاوة والتدبر الميسر",
    rating: 4.9,
    reviewCount: 85,
    students: 112,
    experience: "12 سنة",
    specialty: "تصحيح تلاوة وتدبر معاني الآيات",
    image: "/man.png",
    hourlyPrice: 220,
    price: "220 ج.م / ساعة",
    verified: true,
    bio: "يجمع بين الإتقان الصوتي وشرح معاني الآيات للأطفال بأسلوب ممتع يجعل الطفل يحب القرآن ويتخلق بأخلاقه.",
    tags: ["هادئ", "تفسير ميسر", "تدبر", "أخلاق قرآنية"],
    availableSlots: [
      { id: "s11", day: "اليوم", time: "07:00 م" },
      { id: "s12", day: "السبت", time: "06:00 م" },
    ],
    sampleRecitation: "سورة الرحمن - تلاوة ندية",
  },
  {
    id: 5,
    name: "الشيخ بلال حمزة",
    title: "مدرس القرآن للبراعم والناشئين",
    rating: 4.6,
    reviewCount: 40,
    students: 75,
    experience: "4 سنوات",
    specialty: "تحفيظ جزء عمّ وجزء تبارك للمبتدئين",
    image: "/man.png",
    hourlyPrice: 130,
    price: "130 ج.م / ساعة",
    verified: false,
    bio: "شاب شغوف بالتعليم والتحفيز السلوكي الإيجابي للأطفال، سريع الرد ومرن في المواعيد.",
    tags: ["سريع الرد", "تشجيع", "براعم"],
    availableSlots: [
      { id: "s13", day: "اليوم", time: "08:00 م" },
      { id: "s14", day: "الأحد", time: "04:30 م" },
    ],
    sampleRecitation: "سورة الأعلى - ترتيل تعليمي",
  },
  {
    id: 6,
    name: "الشيخ إياد المقدسي",
    title: "خبير المقامات القرآنية والمسابقات الدولية",
    rating: 4.9,
    reviewCount: 200,
    students: 300,
    experience: "20 سنة",
    specialty: "تأهيل للمسابقات الدولية وإتقان المقامات",
    image: "/man.png",
    hourlyPrice: 350,
    price: "350 ج.م / ساعة",
    verified: true,
    bio: "محكّم سابق في مسابقات قرآنية دولية، أهل عشرات الطلاب للفوز بالمراكز الأولى في حفظ القرآن كاملاً وتجويده وترتيله.",
    tags: ["خبير", "مقامات", "مسابقات دولية", "إجازات مسندة"],
    availableSlots: [
      { id: "s15", day: "غداً", time: "08:00 م" },
      { id: "s16", day: "الاثنين", time: "06:00 م" },
    ],
    sampleRecitation: "سورة الإسراء - مقام البيات",
  },
];

// Initial Children Data
export const INITIAL_CHILDREN = [
  {
    id: 1,
    name: "يوسف",
    fullName: "يوسف أحمد المنشاوي",
    age: 9,
    gender: "male",
    grade: "primary",
    level: "جزء عمّ",
    memorizedAmount: "سورة النبأ إلى الناس",
    progress: 75,
    hasanat: 1450,
    streak: 12,
    avatar: "/man.png",
    assignedSheikhId: 1,
    sheikh: "الشيخ عبد الرحمن السعدي",
    lastSession: "منذ ساعتين",
    memorizationGoal: "إتمام جزء عمّ كاملاً بنهاية الشهر",
    surahs: [
      { id: 1, name: "الفاتحة", status: "completed", ayahs: 7, grade: "ممتاز (5/5)" },
      { id: 2, name: "الناس", status: "completed", ayahs: 6, grade: "ممتاز (5/5)" },
      { id: 3, name: "الفلق", status: "completed", ayahs: 5, grade: "جيد جداً (4.5/5)" },
      { id: 4, name: "الإخلاص", status: "completed", ayahs: 4, grade: "ممتاز (5/5)" },
      { id: 5, name: "المسد", status: "current", ayahs: 5, grade: "جاري التدريب" },
      { id: 6, name: "النصر", status: "locked", ayahs: 3, grade: "قريباً" },
      { id: 7, name: "الكافرون", status: "locked", ayahs: 6, grade: "قريباً" },
      { id: 8, name: "الكوثر", status: "locked", ayahs: 3, grade: "قريباً" },
    ],
    dailyQuests: [
      { id: 1, title: "تسميع الورد اليومي (سورة المسد)", done: true, reward: 20 },
      { id: 2, title: "الاستماع لتصحيح الشيخ عبد الرحمن", done: false, reward: 15 },
      { id: 3, title: "تسجيل تلاوة سورة المسد بصوتك", done: false, reward: 25 },
      { id: 4, title: "قراءة قصة أصحاب الفيل في وضع القصص", done: true, reward: 10 },
    ],
    recordings: [
      {
        id: "rec-1",
        surah: "سورة الفاتحة",
        ayahs: "1 - 7",
        date: "أمس - 04:30 م",
        duration: "00:45",
        status: "reviewed",
        rating: 4.8,
        teacherFeedback: "ما شاء الله يا يوسف تلاوة عطرة! انتبه فقط لمد كلمة (الضالّين) ست حركات مشبعة.",
        audioUrl: "", // simulated or recorded blob url
      },
      {
        id: "rec-2",
        surah: "سورة الناس",
        ayahs: "1 - 6",
        date: "منذ يومين - 03:15 م",
        duration: "00:30",
        status: "reviewed",
        rating: 5.0,
        teacherFeedback: "ممتاز ومتقن! الغنة في النون المشددة في (الجنّة والنّاس) واضحة وسليمة جداً.",
        audioUrl: "",
      },
    ],
  },
  {
    id: 2,
    name: "سارة",
    fullName: "سارة أحمد المنشاوي",
    age: 6,
    gender: "female",
    grade: "kg",
    level: "القاعدة النورانية",
    memorizedAmount: "الحروف الهجائية وقصار السور",
    progress: 40,
    hasanat: 820,
    streak: 6,
    avatar: "/man.png",
    assignedSheikhId: 2,
    sheikh: "الشيخ يوسف القاضي",
    lastSession: "أمس",
    memorizationGoal: "إتقان نطق الحروف اللثوية وحفظ سورة الكوثر والإخلاص",
    surahs: [
      { id: 1, name: "الفاتحة", status: "completed", ayahs: 7, grade: "ممتاز (5/5)" },
      { id: 2, name: "الإخلاص", status: "completed", ayahs: 4, grade: "ممتاز (4.8/5)" },
      { id: 3, name: "الكوثر", status: "current", ayahs: 3, grade: "جاري التدريب" },
      { id: 4, name: "الفلق", status: "locked", ayahs: 5, grade: "قريباً" },
    ],
    dailyQuests: [
      { id: 1, title: "ترديد الحروف المفخمة مع الشيخ يوسف", done: true, reward: 15 },
      { id: 2, title: "تكرار سورة الكوثر 3 مرات", done: true, reward: 20 },
      { id: 3, title: "تسجيل صوتي لسورة الكوثر", done: false, reward: 25 },
    ],
    recordings: [
      {
        id: "rec-s1",
        surah: "سورة الإخلاص",
        ayahs: "1 - 4",
        date: "منذ 3 أيام",
        duration: "00:25",
        status: "reviewed",
        rating: 4.9,
        teacherFeedback: "بطلة يا سارة! نطق حرف الدال في (أحدْ) و(الصمدْ) مع القلقلة اللطيفة رائع جداً.",
        audioUrl: "",
      },
    ],
  },
];

// Initial Bookings
export const INITIAL_BOOKINGS = [
  {
    id: "b-1",
    childId: 1,
    childName: "يوسف",
    sheikhId: 1,
    sheikhName: "الشيخ عبد الرحمن السعدي",
    date: "اليوم",
    time: "04:00 م",
    status: "confirmed", // confirmed | pending | completed | cancelled
    type: "تصحيح تلاوة وحفظ سورة المسد",
    meetingUrl: "https://meet.motqan.com/room/youssef-session",
    notes: "جلسة نصف ساعة - مراجعة سورة الإخلاص وتسميع سورة المسد",
  },
  {
    id: "b-2",
    childId: 2,
    childName: "سارة",
    sheikhId: 2,
    sheikhName: "الشيخ يوسف القاضي",
    date: "غداً",
    time: "05:00 م",
    status: "confirmed",
    type: "القاعدة النورانية وسورة الكوثر",
    meetingUrl: "https://meet.motqan.com/room/sarah-session",
    notes: "تمرين نطق الحروف بالفتح والكسر",
  },
  {
    id: "b-3",
    childId: 1,
    childName: "يوسف",
    sheikhId: 1,
    sheikhName: "الشيخ عبد الرحمن السعدي",
    date: "الأسبوع الماضي",
    time: "04:00 م",
    status: "completed",
    type: "تسميع سورة الفلق والناس",
    meetingUrl: "",
    notes: "أتم التسميع بنجاح وتم منحه وسام الحافظ الصغير",
  },
];

export const useAppStore = create(
  persist(
    (set, get) => ({
      // Current logged in user
      currentUser: {
        id: "u-1",
        name: "أحمد المنشاوي",
        email: "ahmad@motqan.com",
        role: "parent", // 'parent' | 'student' | 'sheikh'
        avatar: "/man.png",
      },

      // Demo Role switcher (allows immediate previewing Parent / Student / Sheikh view)
      setRole: (role) => {
        if (role === "parent") {
          set({
            currentUser: {
              id: "u-1",
              name: "أحمد المنشاوي",
              email: "ahmad@motqan.com",
              role: "parent",
              avatar: "/man.png",
            },
          });
        } else if (role === "student") {
          const activeChild =
            (get().children && get().children.find((c) => c.id === get().selectedChildId)) ||
            (get().children && get().children[0]) ||
            INITIAL_CHILDREN[0];
          set({
            currentUser: {
              id: `u-child-${activeChild.id}`,
              name: activeChild.name,
              email: "youssef@motqan.com",
              role: "student",
              avatar: activeChild.avatar,
              childId: activeChild.id,
            },
          });
        } else if (role === "sheikh") {
          set({
            currentUser: {
              id: "u-sheikh-1",
              name: "الشيخ عبد الرحمن السعدي",
              email: "sheikh.abdelrahman@motqan.com",
              role: "sheikh",
              avatar: "/man.png",
              sheikhId: 1,
            },
          });
        }
      },

      // Auth actions
      login: (email, role = "parent") => {
        let name = "أحمد المنشاوي";
        if (role === "sheikh") name = "الشيخ عبد الرحمن السعدي";
        if (role === "student") name = "يوسف المنشاوي";

        set({
          currentUser: {
            id: `u-${Date.now()}`,
            name,
            email,
            role,
            avatar: "/man.png",
          },
        });
      },

      registerUser: (userData) => {
        set({
          currentUser: {
            id: `u-${Date.now()}`,
            name: userData.fullName,
            email: userData.email,
            role: userData.role || "parent",
            avatar: "/man.png",
          },
        });
      },

      logout: () => {
        set({ currentUser: null });
      },

      // Children list & selected child
      children: INITIAL_CHILDREN,
      selectedChildId: 1,

      setSelectedChildId: (id) => {
        set({ selectedChildId: id });
        // If current role is student, also sync currentUser
        if (get().currentUser?.role === "student") {
          const child = get().children.find((c) => c.id === id);
          if (child) {
            set((state) => ({
              currentUser: {
                ...state.currentUser,
                name: child.name,
                avatar: child.avatar,
                childId: child.id,
              },
            }));
          }
        }
      },

      getActiveChild: () => {
        const { children, selectedChildId } = get();
        return (
          (children && children.find((c) => c.id === selectedChildId)) ||
          (children && children[0]) ||
          INITIAL_CHILDREN[0]
        );
      },

      addChild: (childData) => {
        const newChild = {
          id: Date.now(),
          name: childData.name || "بطل جديد",
          fullName: childData.name || "بطل جديد",
          age: parseInt(childData.age, 10) || 7,
          gender: childData.gender || "male",
          grade: childData.grade || "primary",
          level: childData.memorizedAmount || "جزء عمّ",
          memorizedAmount: childData.memorizedAmount || "سورة الفاتحة",
          progress: 10,
          hasanat: 100,
          streak: 1,
          avatar: "/man.png",
          assignedSheikhId: 1,
          sheikh: "الشيخ عبد الرحمن السعدي",
          lastSession: "اليوم",
          memorizationGoal: "حفظ جزء عمّ",
          surahs: [
            { id: 1, name: "الفاتحة", status: "completed", ayahs: 7, grade: "ممتاز (5/5)" },
            { id: 2, name: "الناس", status: "current", ayahs: 6, grade: "جاري التدريب" },
            { id: 3, name: "الفلق", status: "locked", ayahs: 5, grade: "قريباً" },
          ],
          dailyQuests: [
            { id: 1, title: "تسميع سورة الفاتحة", done: true, reward: 20 },
            { id: 2, title: "الاستماع لقراءة الشيخ", done: false, reward: 15 },
          ],
          recordings: [],
        };

        set((state) => ({
          children: [...state.children, newChild],
          selectedChildId: newChild.id,
        }));
        return newChild;
      },

      // Teachers / Sheikhs
      teachers: INITIAL_TEACHERS,

      // Bookings & Lessons
      bookings: INITIAL_BOOKINGS,

      createBooking: ({ teacherId, childId, date, time, type = "حلقة تحفيظ ومراجعة", notes = "" }) => {
        const teacher = get().teachers.find((t) => t.id === teacherId) || get().teachers[0];
        const child = get().children.find((c) => c.id === childId) || get().getActiveChild();

        const newBooking = {
          id: `b-${Date.now()}`,
          childId: child.id,
          childName: child.name,
          sheikhId: teacher.id,
          sheikhName: teacher.name,
          date: date || "غداً",
          time: time || "04:00 م",
          status: "confirmed",
          type: type || "جلسة تحفيظ وتصحيح تلاوة",
          meetingUrl: `https://meet.motqan.com/room/${child.name}-${Date.now().toString().slice(-4)}`,
          notes: notes || "جلسة تفاعلية مباشرة مع الشيخ",
        };

        set((state) => ({
          bookings: [newBooking, ...state.bookings],
        }));

        return newBooking;
      },

      cancelBooking: (bookingId) => {
        set((state) => ({
          bookings: state.bookings.map((b) =>
            b.id === bookingId ? { ...b, status: "cancelled" } : b
          ),
        }));
      },

      // Recitations & Audio Practice
      addStudentRecording: ({ childId, surah, ayahs, audioBlobUrl, duration = "00:35" }) => {
        const newRec = {
          id: `rec-${Date.now()}`,
          surah,
          ayahs,
          date: "اليوم - " + new Date().toLocaleTimeString("ar-EG", { hour: "2-digit", minute: "2-digit" }),
          duration,
          status: "pending_review", // pending_review | reviewed
          rating: null,
          teacherFeedback: "بانتظار استماع الشيخ وكتابة الملاحظات الصوتية...",
          audioUrl: audioBlobUrl,
        };

        set((state) => ({
          children: state.children.map((c) => {
            if (c.id === childId) {
              return {
                ...c,
                hasanat: c.hasanat + 30, // reward points for recording
                recordings: [newRec, ...(c.recordings || [])],
              };
            }
            return c;
          }),
        }));

        return newRec;
      },

      // Sheikh reviews recording
      reviewRecording: ({ childId, recordingId, rating, feedback }) => {
        set((state) => ({
          children: state.children.map((c) => {
            if (c.id === childId) {
              return {
                ...c,
                recordings: (c.recordings || []).map((r) =>
                  r.id === recordingId
                    ? {
                        ...r,
                        status: "reviewed",
                        rating,
                        teacherFeedback: feedback,
                      }
                    : r
                ),
              };
            }
            return c;
          }),
        }));
      },

      // Family pricing selection persistence
      pricingSelection: {
        planId: "standard",
        childrenCount: 1,
        monthlyTotal: 100,
      },
      setPricingSelection: (planId, childrenCount, monthlyTotal) => {
        set({
          pricingSelection: { planId, childrenCount, monthlyTotal },
        });
      },
    }),
    {
      name: "motqan-app-store",
    }
  )
);
