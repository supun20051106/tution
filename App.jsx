import { useState, useEffect } from 'react'
import { 
  Menu, X, Phone, MessageCircle, MapPin, Clock, BookOpen, 
  Award, Users, Calendar, ChevronDown, Sun, Moon, Star,
  CheckCircle, ArrowRight, Mail, Facebook, Youtube, Video,
  GraduationCap, User, MapPinned, Send, ChevronRight,
  Play, BookOpenCheck, Trophy, Lightbulb
} from 'lucide-react'

// ==================== THEME CONFIGURATION ====================
const themes = {
  light: {
    bg: 'bg-slate-50',
    card: 'bg-white',
    text: 'text-slate-900',
    textMuted: 'text-slate-600',
    border: 'border-slate-200',
    primary: 'bg-blue-700',
    primaryHover: 'hover:bg-blue-800',
    primaryText: 'text-blue-700',
    primaryLight: 'bg-blue-50',
    secondary: 'bg-emerald-600',
    secondaryHover: 'hover:bg-emerald-700',
    accent: 'bg-amber-500',
    gradient: 'from-blue-700 via-blue-800 to-slate-900',
    navBg: 'bg-white/90 backdrop-blur-md',
    footer: 'bg-slate-900',
    input: 'bg-white border-slate-300',
    heroPattern: 'opacity-[0.03]',
  },
  dark: {
    bg: 'bg-slate-950',
    card: 'bg-slate-900',
    text: 'text-slate-100',
    textMuted: 'text-slate-400',
    border: 'border-slate-800',
    primary: 'bg-blue-600',
    primaryHover: 'hover:bg-blue-500',
    primaryText: 'text-blue-400',
    primaryLight: 'bg-blue-900/30',
    secondary: 'bg-emerald-500',
    secondaryHover: 'hover:bg-emerald-400',
    accent: 'bg-amber-400',
    gradient: 'from-blue-900 via-slate-900 to-black',
    navBg: 'bg-slate-950/90 backdrop-blur-md',
    footer: 'bg-black',
    input: 'bg-slate-800 border-slate-700',
    heroPattern: 'opacity-[0.05]',
  }
}

// ==================== DATA ====================
const teacherData = {
  name: "[Your Name]",
  title: "Expert Tuition Teacher",
  subjects: ["Mathematics", "Science", "ICT", "Commerce", "English"],
  grades: "Grade 6 – 11 | O/L | A/L",
  medium: "Sinhala / English / Tamil",
  location: "[City, Sri Lanka]",
  phone: "[Phone Number]",
  whatsapp: "[WhatsApp Number]",
  email: "[your.email@example.com]",
  experience: "10+ Years",
  students: "2000+",
  successRate: "95%",
  qualifications: [
    "BSc. in Education - University of Colombo",
    "Diploma in Teaching - National Institute of Education",
    "Certified ICT Educator"
  ],
  bio: "Dedicated educator with over a decade of experience helping students achieve academic excellence. Specialized in creating personalized learning experiences that cater to individual student needs, ensuring every learner reaches their full potential.",
  teachingStyle: "Interactive, student-centered approach with focus on practical application and exam preparation. Uses modern teaching aids and real-world examples to make complex concepts easy to understand."
}

const classes = [
  { subject: "Mathematics", grades: "Grade 6-11, O/L", type: "Group & Individual", mode: "Online & Physical", icon: "📐", color: "from-blue-500 to-blue-600" },
  { subject: "Science", grades: "Grade 6-11, O/L", type: "Group & Individual", mode: "Online & Physical", icon: "🔬", color: "from-emerald-500 to-emerald-600" },
  { subject: "ICT", grades: "Grade 6-11, O/L, A/L", type: "Group & Individual", mode: "Online & Physical", icon: "💻", color: "from-violet-500 to-violet-600" },
  { subject: "Commerce", grades: "O/L, A/L", type: "Group & Individual", mode: "Online & Physical", icon: "📊", color: "from-amber-500 to-amber-600" },
  { subject: "English", grades: "Grade 6-11, O/L", type: "Group & Individual", mode: "Online & Physical", icon: "📚", color: "from-rose-500 to-rose-600" },
]

const schedule = [
  { day: "Monday", classes: [{ time: "3:30 PM - 5:00 PM", subject: "Mathematics - Grade 10/11" }, { time: "5:30 PM - 7:00 PM", subject: "Science - O/L" }] },
  { day: "Tuesday", classes: [{ time: "3:30 PM - 5:00 PM", subject: "ICT - Grade 10/11" }, { time: "5:30 PM - 7:00 PM", subject: "English - Grade 9" }] },
  { day: "Wednesday", classes: [{ time: "3:30 PM - 5:00 PM", subject: "Mathematics - O/L" }, { time: "5:30 PM - 7:00 PM", subject: "Commerce - A/L" }] },
  { day: "Thursday", classes: [{ time: "3:30 PM - 5:00 PM", subject: "Science - Grade 10/11" }, { time: "5:30 PM - 7:00 PM", subject: "ICT - A/L" }] },
  { day: "Friday", classes: [{ time: "3:30 PM - 5:00 PM", subject: "Mathematics - Grade 6-9" }, { time: "5:30 PM - 7:00 PM", subject: "English - O/L" }] },
  { day: "Saturday", classes: [{ time: "8:00 AM - 12:00 PM", subject: "Special Revision Classes" }, { time: "1:00 PM - 4:00 PM", subject: "Mock Exams & Paper Classes" }] },
  { day: "Sunday", classes: [{ time: "9:00 AM - 1:00 PM", subject: "A/L Intensive Classes" }] },
]

const testimonials = [
  { name: "Amaya Perera", grade: "O/L 2025", result: "9 A's", text: "The best teacher I've ever had! Made Mathematics so easy to understand. The individual attention I received helped me achieve 9 A's at O/L." },
  { name: "Dineth Silva", grade: "A/L 2024", result: "3 A's", text: "Thanks to these classes, I got into my dream university. The Commerce classes were exceptional and the exam techniques taught were invaluable." },
  { name: "Kavindi Fernando", grade: "Grade 11", result: "Top in District", text: "Individual attention and great teaching methods. My grades improved dramatically within just 3 months of joining." },
  { name: "Ravindu Gamage", grade: "O/L 2025", result: "8 A's, 1 B", text: "Online classes are just as effective as physical ones. Very flexible schedule and supportive learning environment." },
]

const faqs = [
  { q: "What are the class fees?", a: "Fees vary by subject and class type. Group classes start from LKR 2,500/month. Individual classes are LKR 1,500 per hour. Contact us for detailed pricing and package deals." },
  { q: "Do you offer online classes?", a: "Yes! We offer both online and physical classes. Online classes are conducted via Zoom with interactive whiteboards and recorded sessions for revision. All you need is a stable internet connection." },
  { q: "How do I register?", a: "You can register by filling out the contact form, calling us directly, or sending a WhatsApp message. We will schedule a free consultation to assess your needs and recommend the best program." },
  { q: "What grades do you teach?", a: "We cover Grade 6 through 11 (Local Syllabus), O/L, and A/L examinations in all major subjects including Mathematics, Science, ICT, Commerce, and English." },
  { q: "Are study materials provided?", a: "Yes, all students receive comprehensive study notes, past paper collections, model papers, and access to our online resource library. A/L students get special revision packs." },
  { q: "Can I join mid-term?", a: "Absolutely! We have continuous enrollment and will help you catch up with personalized support. Our flexible scheduling ensures you never miss out on important topics." },
]

const stats = [
  { icon: Users, value: "2,000+", label: "Students Taught" },
  { icon: Award, value: "95%", label: "Success Rate" },
  { icon: Clock, value: "10+", label: "Years Experience" },
  { icon: Star, value: "4.9/5", label: "Student Rating" },
]

const galleryImages = [
  { title: "Classroom Session", desc: "Interactive group learning environment" },
  { title: "Student Activities", desc: "Hands-on science experiments" },
  { title: "Online Classes", desc: "Virtual learning with digital whiteboards" },
  { title: "Award Ceremony", desc: "Celebrating student achievements" },
  { title: "Study Materials", desc: "Comprehensive notes and resources" },
  { title: "Group Discussion", desc: "Collaborative problem solving" },
]

// ==================== COMPONENTS ====================

const Navbar = ({ toggleTheme, currentTheme }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const t = themes[currentTheme]

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Classes', href: '#classes' },
    { name: 'Results', href: '#results' },
    { name: 'Schedule', href: '#schedule' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'shadow-lg' : ''} ${t.navBg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className={`text-xl font-bold ${t.primaryText} flex items-center gap-2`}>
            <GraduationCap className="w-8 h-8" />
            <span className="hidden sm:inline">{teacherData.name}</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className={`text-sm font-medium ${t.textMuted} hover:${t.primaryText} transition-colors`}>
                {link.name}
              </a>
            ))}
            <button onClick={toggleTheme} className={`p-2 rounded-full ${t.border} border hover:bg-opacity-10 hover:bg-gray-500 transition-all`}>
              {currentTheme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5 text-amber-400" />}
            </button>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <button onClick={toggleTheme} className={`p-2 rounded-full ${t.border} border`}>
              {currentTheme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5 text-amber-400" />}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className={`p-2 ${t.text}`}>
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      <div className={`md:hidden transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} ${t.card} border-t ${t.border}`}>
        <div className="px-4 py-2 space-y-1">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} 
               className={`block px-3 py-2 rounded-md text-base font-medium ${t.textMuted} hover:${t.primaryText} hover:bg-opacity-5 hover:bg-blue-500`}>
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}

const Hero = ({ currentTheme }) => {
  const t = themes[currentTheme]

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      <div className={`absolute inset-0 bg-gradient-to-br ${t.gradient} opacity-95`} />
      <div className={`absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.03"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] ${t.heroPattern}`} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm font-medium mb-6 animate-fade-in">
              <Star className="w-4 h-4 text-amber-400" />
              <span>Trusted by 2,000+ Students in Sri Lanka</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Achieve Better Results with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500">
                Expert Tuition
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-2xl">
              Personalized coaching in Mathematics, Science, ICT, Commerce & English for Grade 6-11, O/L & A/L students. 
              Available in Sinhala, English & Tamil mediums.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-900 rounded-full font-bold text-lg hover:bg-amber-400 hover:text-slate-900 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Enroll Now
                <ArrowRight className="w-5 h-5" />
              </a>
              <a href={`https://wa.me/${teacherData.whatsapp.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-emerald-500 text-white rounded-full font-bold text-lg hover:bg-emerald-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                <MessageCircle className="w-5 h-5" />
                Contact on WhatsApp
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-6 justify-center lg:justify-start text-white/70 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-400" />
                <span>Online & Physical</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-400" />
                <span>Individual & Group</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-400" />
                <span>All Mediums</span>
              </div>
            </div>
          </div>

          <div className="hidden lg:flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-amber-400 to-blue-500 rounded-3xl blur-2xl opacity-30 animate-pulse" />
              <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-2 border border-white/20">
                <div className="bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl w-80 h-96 flex items-center justify-center overflow-hidden">
                  <div className="text-center p-8">
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                      <User className="w-16 h-16 text-blue-600" />
                    </div>
                    <p className="text-slate-500 font-medium">Teacher Photo</p>
                    <p className="text-slate-400 text-sm mt-1">Replace with your image</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-xl animate-bounce-slow">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-slate-900">2,000+</p>
                    <p className="text-xs text-slate-500">Happy Students</p>
                  </div>
                </div>
              </div>

              <div className="absolute -top-6 -right-6 bg-white rounded-xl p-4 shadow-xl animate-bounce-slow" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                    <Award className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-slate-900">95%</p>
                    <p className="text-xs text-slate-500">Success Rate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" 
                fill={currentTheme === 'light' ? '#f8fafc' : '#020617'} />
        </svg>
      </div>
    </section>
  )
}

const About = ({ currentTheme }) => {
  const t = themes[currentTheme]

  return (
    <section id="about" className={`py-20 ${t.bg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className={`inline-block px-4 py-1 rounded-full text-sm font-semibold ${t.primary} text-white mb-4`}>About Teacher</span>
          <h2 className={`text-3xl sm:text-4xl font-bold ${t.text} mb-4`}>Meet Your Educator</h2>
          <p className={`${t.textMuted} max-w-2xl mx-auto`}>Committed to shaping the future of every student through quality education</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className={`absolute -inset-4 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-3xl opacity-20 blur-xl`} />
            <div className={`relative ${t.card} rounded-3xl p-2 shadow-xl border ${t.border}`}>
              <div className="bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl aspect-[4/5] flex items-center justify-center overflow-hidden">
                <div className="text-center p-8">
                  <div className="w-40 h-40 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-100 to-emerald-100 flex items-center justify-center">
                    <User className="w-20 h-20 text-blue-600" />
                  </div>
                  <p className="text-slate-500 font-medium text-lg">Teacher Profile Photo</p>
                  <p className="text-slate-400 text-sm mt-2">Recommended: Professional headshot</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className={`text-2xl font-bold ${t.text} mb-4`}>{teacherData.name}</h3>
            <p className={`${t.textMuted} text-lg mb-6 leading-relaxed`}>{teacherData.bio}</p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className={`${t.card} p-4 rounded-xl border ${t.border}`}>
                <Clock className={`w-6 h-6 ${t.primaryText} mb-2`} />
                <p className={`font-bold ${t.text}`}>{teacherData.experience}</p>
                <p className={`text-sm ${t.textMuted}`}>Teaching Experience</p>
              </div>
              <div className={`${t.card} p-4 rounded-xl border ${t.border}`}>
                <GraduationCap className={`w-6 h-6 ${t.primaryText} mb-2`} />
                <p className={`font-bold ${t.text}`}>{teacherData.grades}</p>
                <p className={`text-sm ${t.textMuted}`}>Grades Covered</p>
              </div>
              <div className={`${t.card} p-4 rounded-xl border ${t.border}`}>
                <BookOpen className={`w-6 h-6 ${t.primaryText} mb-2`} />
                <p className={`font-bold ${t.text}`}>{teacherData.subjects.length} Subjects</p>
                <p className={`text-sm ${t.textMuted}`}>Subjects Taught</p>
              </div>
              <div className={`${t.card} p-4 rounded-xl border ${t.border}`}>
                <MapPin className={`w-6 h-6 ${t.primaryText} mb-2`} />
                <p className={`font-bold ${t.text}`}>{teacherData.location}</p>
                <p className={`text-sm ${t.textMuted}`}>Location</p>
              </div>
            </div>

            <div className="mb-6">
              <h4 className={`font-bold ${t.text} mb-3`}>Qualifications</h4>
              <ul className="space-y-2">
                {teacherData.qualifications.map((qual, idx) => (
                  <li key={idx} className={`flex items-start gap-2 ${t.textMuted}`}>
                    <CheckCircle className={`w-5 h-5 ${t.primaryText} flex-shrink-0 mt-0.5`} />
                    <span>{qual}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className={`font-bold ${t.text} mb-3`}>Teaching Style</h4>
              <p className={`${t.textMuted}`}>{teacherData.teachingStyle}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const Classes = ({ currentTheme }) => {
  const t = themes[currentTheme]

  return (
    <section id="classes" className={`py-20 ${t.bg === 'bg-slate-50' ? 'bg-slate-100' : 'bg-slate-900'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className={`inline-block px-4 py-1 rounded-full text-sm font-semibold ${t.secondary} text-white mb-4`}>Our Classes</span>
          <h2 className={`text-3xl sm:text-4xl font-bold ${t.text} mb-4`}>Classes Offered</h2>
          <p className={`${t.textMuted} max-w-2xl mx-auto`}>Comprehensive tuition programs designed for academic excellence</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {classes.map((cls, idx) => (
            <div key={idx} className={`${t.card} rounded-2xl p-6 border ${t.border} hover:shadow-xl transition-all duration-300 group hover:-translate-y-1`}>
              <div className="text-4xl mb-4">{cls.icon}</div>
              <h3 className={`text-xl font-bold ${t.text} mb-2 group-hover:${t.primaryText} transition-colors`}>{cls.subject}</h3>
              <div className="space-y-2">
                <div className={`flex items-center gap-2 text-sm ${t.textMuted}`}>
                  <GraduationCap className="w-4 h-4" />
                  <span>{cls.grades}</span>
                </div>
                <div className={`flex items-center gap-2 text-sm ${t.textMuted}`}>
                  <Users className="w-4 h-4" />
                  <span>{cls.type}</span>
                </div>
                <div className={`flex items-center gap-2 text-sm ${t.textMuted}`}>
                  <Video className="w-4 h-4" />
                  <span>{cls.mode}</span>
                </div>
              </div>
              <a href="#contact" className={`mt-4 inline-flex items-center gap-1 text-sm font-semibold ${t.primaryText} hover:gap-2 transition-all`}>
                Enroll Now <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const Results = ({ currentTheme }) => {
  const t = themes[currentTheme]

  return (
    <section id="results" className={`py-20 ${t.bg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className={`inline-block px-4 py-1 rounded-full text-sm font-semibold ${t.accent} text-slate-900 mb-4`}>Success Stories</span>
          <h2 className={`text-3xl sm:text-4xl font-bold ${t.text} mb-4`}>Results & Achievements</h2>
          <p className={`${t.textMuted} max-w-2xl mx-auto`}>Real results from real students who trusted our teaching</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, idx) => (
            <div key={idx} className={`${t.card} rounded-2xl p-6 text-center border ${t.border} hover:shadow-lg transition-all`}>
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-full ${t.primaryLight} mb-4`}>
                <stat.icon className={`w-7 h-7 ${t.primaryText}`} />
              </div>
              <p className={`text-3xl font-bold ${t.text} mb-1`}>{stat.value}</p>
              <p className={`text-sm ${t.textMuted}`}>{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className={`${t.card} rounded-2xl p-6 border ${t.border} relative`}>
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <p className={`${t.text} text-lg mb-4 italic leading-relaxed`}>"{testimonial.text}"</p>
              <div className="flex items-center justify-between">
                <div>
                  <p className={`font-bold ${t.text}`}>{testimonial.name}</p>
                  <p className={`text-sm ${t.textMuted}`}>{testimonial.grade}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-bold ${t.secondary} text-white`}>
                  {testimonial.result}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const Schedule = ({ currentTheme }) => {
  const t = themes[currentTheme]
  const [activeDay, setActiveDay] = useState(0)

  return (
    <section id="schedule" className={`py-20 ${t.bg === 'bg-slate-50' ? 'bg-slate-100' : 'bg-slate-900'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className={`inline-block px-4 py-1 rounded-full text-sm font-semibold ${t.primary} text-white mb-4`}>Timetable</span>
          <h2 className={`text-3xl sm:text-4xl font-bold ${t.text} mb-4`}>Class Schedule</h2>
          <p className={`${t.textMuted} max-w-2xl mx-auto`}>Plan your week with our structured class timetable</p>
        </div>

        <div className="flex overflow-x-auto gap-2 mb-6 pb-2 lg:hidden">
          {schedule.map((day, idx) => (
            <button key={idx} onClick={() => setActiveDay(idx)}
                    className={`px-4 py-2 rounded-full whitespace-nowrap font-medium transition-all ${
                      activeDay === idx 
                        ? `${t.primary} text-white` 
                        : `${t.card} ${t.text} border ${t.border}`
                    }`}>
              {day.day}
            </button>
          ))}
        </div>

        <div className="lg:hidden">
          <div className={`${t.card} rounded-2xl p-6 border ${t.border}`}>
            <h3 className={`text-xl font-bold ${t.text} mb-4`}>{schedule[activeDay].day}</h3>
            <div className="space-y-4">
              {schedule[activeDay].classes.map((cls, idx) => (
                <div key={idx} className={`flex items-start gap-4 p-4 rounded-xl ${t.bg === 'bg-slate-50' ? 'bg-slate-50' : 'bg-slate-800'}`}>
                  <div className={`flex-shrink-0 w-12 h-12 rounded-full ${t.primary} flex items-center justify-center`}>
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className={`font-bold ${t.text}`}>{cls.subject}</p>
                    <p className={`text-sm ${t.textMuted}`}>{cls.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="hidden lg:grid grid-cols-7 gap-4">
          {schedule.map((day, idx) => (
            <div key={idx} className={`${t.card} rounded-2xl p-4 border ${t.border} min-h-[400px]`}>
              <h3 className={`text-center font-bold ${t.text} mb-4 pb-2 border-b ${t.border}`}>{day.day}</h3>
              <div className="space-y-3">
                {day.classes.map((cls, cidx) => (
                  <div key={cidx} className={`p-3 rounded-xl text-center ${t.primaryLight}`}>
                    <p className={`text-xs font-bold ${t.primaryText} mb-1`}>{cls.time}</p>
                    <p className={`text-sm ${t.text} font-medium`}>{cls.subject}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className={`mt-8 text-center p-6 rounded-2xl ${t.card} border ${t.border}`}>
          <p className={`${t.textMuted}`}>
            <span className="font-bold text-amber-500">New Batches Starting Soon!</span> Contact us to reserve your spot.
          </p>
        </div>
      </div>
    </section>
  )
}

const Gallery = ({ currentTheme }) => {
  const t = themes[currentTheme]

  return (
    <section id="gallery" className={`py-20 ${t.bg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className={`inline-block px-4 py-1 rounded-full text-sm font-semibold ${t.secondary} text-white mb-4`}>Gallery</span>
          <h2 className={`text-3xl sm:text-4xl font-bold ${t.text} mb-4`}>Our Learning Environment</h2>
          <p className={`${t.textMuted} max-w-2xl mx-auto`}>Glimpses of our classrooms, activities, and student life</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((img, idx) => (
            <div key={idx} className={`group relative aspect-square rounded-2xl overflow-hidden border ${t.border} cursor-pointer`}>
              <div className={`absolute inset-0 ${t.bg === 'bg-slate-50' ? 'bg-slate-200' : 'bg-slate-800'} flex items-center justify-center`}>
                <div className="text-center p-4">
                  <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-white/20 flex items-center justify-center">
                    <BookOpen className="w-8 h-8 text-slate-400" />
                  </div>
                  <p className="text-slate-400 text-sm font-medium">{img.title}</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div>
                  <p className="text-white font-bold">{img.title}</p>
                  <p className="text-white/80 text-sm">{img.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const FAQ = ({ currentTheme }) => {
  const t = themes[currentTheme]
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section id="faq" className={`py-20 ${t.bg === 'bg-slate-50' ? 'bg-slate-100' : 'bg-slate-900'}`}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className={`inline-block px-4 py-1 rounded-full text-sm font-semibold ${t.accent} text-slate-900 mb-4`}>FAQ</span>
          <h2 className={`text-3xl sm:text-4xl font-bold ${t.text} mb-4`}>Frequently Asked Questions</h2>
          <p className={`${t.textMuted}`}>Got questions? We've got answers!</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className={`${t.card} rounded-xl border ${t.border} overflow-hidden`}>
              <button onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                      className="w-full flex items-center justify-between p-5 text-left">
                <span className={`font-semibold ${t.text} pr-4`}>{faq.q}</span>
                <ChevronDown className={`w-5 h-5 ${t.primaryText} flex-shrink-0 transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openIndex === idx ? 'max-h-96' : 'max-h-0'}`}>
                <p className={`px-5 pb-5 ${t.textMuted}`}>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const Contact = ({ currentTheme }) => {
  const t = themes[currentTheme]
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', grade: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contact" className={`py-20 ${t.bg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className={`inline-block px-4 py-1 rounded-full text-sm font-semibold ${t.primary} text-white mb-4`}>Contact</span>
          <h2 className={`text-3xl sm:text-4xl font-bold ${t.text} mb-4`}>Get In Touch</h2>
          <p className={`${t.textMuted} max-w-2xl mx-auto`}>Ready to start your journey to academic success? Contact us today!</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className={`${t.card} rounded-2xl p-8 border ${t.border} shadow-lg`}>
            <h3 className={`text-2xl font-bold ${t.text} mb-6`}>Enroll Now</h3>

            {submitted ? (
              <div className="text-center py-12">
                <CheckCircle className="w-16 h-16 text-emerald-500 mx-auto mb-4" />
                <p className={`text-xl font-bold ${t.text} mb-2`}>Thank You!</p>
                <p className={`${t.textMuted}`}>We will contact you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className={`block text-sm font-medium ${t.textMuted} mb-1`}>Student Name</label>
                  <input type="text" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})}
                         className={`w-full px-4 py-3 rounded-xl ${t.input} focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all`}
                         placeholder="Enter student name" />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className={`block text-sm font-medium ${t.textMuted} mb-1`}>Email</label>
                    <input type="email" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})}
                           className={`w-full px-4 py-3 rounded-xl ${t.input} focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all`}
                           placeholder="email@example.com" />
                  </div>
                  <div>
                    <label className={`block text-sm font-medium ${t.textMuted} mb-1`}>Phone</label>
                    <input type="tel" required value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})}
                           className={`w-full px-4 py-3 rounded-xl ${t.input} focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all`}
                           placeholder="07X XXX XXXX" />
                  </div>
                </div>
                <div>
                  <label className={`block text-sm font-medium ${t.textMuted} mb-1`}>Grade / Exam</label>
                  <select value={formData.grade} onChange={(e) => setFormData({...formData, grade: e.target.value})}
                          className={`w-full px-4 py-3 rounded-xl ${t.input} focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all`}>
                    <option value="">Select Grade</option>
                    <option value="6-9">Grade 6 - 9</option>
                    <option value="10-11">Grade 10 - 11</option>
                    <option value="ol">O/L</option>
                    <option value="al">A/L</option>
                  </select>
                </div>
                <div>
                  <label className={`block text-sm font-medium ${t.textMuted} mb-1`}>Message</label>
                  <textarea rows={4} value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})}
                            className={`w-full px-4 py-3 rounded-xl ${t.input} focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none`}
                            placeholder="Tell us about your requirements..." />
                </div>
                <button type="submit" className={`w-full py-4 ${t.primary} ${t.primaryHover} text-white rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2`}>
                  <Send className="w-5 h-5" />
                  Submit Registration
                </button>
              </form>
            )}
          </div>

          <div className="space-y-6">
            <div className={`${t.card} rounded-2xl p-6 border ${t.border}`}>
              <h3 className={`text-xl font-bold ${t.text} mb-6`}>Contact Information</h3>
              <div className="space-y-4">
                <a href={`tel:${teacherData.phone}`} className={`flex items-center gap-4 p-4 rounded-xl ${t.bg === 'bg-slate-50' ? 'bg-slate-50' : 'bg-slate-800'} hover:shadow-md transition-all group`}>
                  <div className={`w-12 h-12 rounded-full ${t.primary} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className={`text-sm ${t.textMuted}`}>Call Us</p>
                    <p className={`font-bold ${t.text}`}>{teacherData.phone}</p>
                  </div>
                </a>

                <a href={`https://wa.me/${teacherData.whatsapp.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer"
                   className={`flex items-center gap-4 p-4 rounded-xl ${t.bg === 'bg-slate-50' ? 'bg-emerald-50' : 'bg-emerald-900/20'} hover:shadow-md transition-all group`}>
                  <div className="w-12 h-12 rounded-full bg-emerald-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className={`text-sm ${t.textMuted}`}>WhatsApp</p>
                    <p className={`font-bold ${t.text}`}>{teacherData.whatsapp}</p>
                  </div>
                </a>

                <div className={`flex items-center gap-4 p-4 rounded-xl ${t.bg === 'bg-slate-50' ? 'bg-slate-50' : 'bg-slate-800'}`}>
                  <div className={`w-12 h-12 rounded-full ${t.primary} flex items-center justify-center`}>
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className={`text-sm ${t.textMuted}`}>Email</p>
                    <p className={`font-bold ${t.text}`}>{teacherData.email}</p>
                  </div>
                </div>

                <div className={`flex items-center gap-4 p-4 rounded-xl ${t.bg === 'bg-slate-50' ? 'bg-slate-50' : 'bg-slate-800'}`}>
                  <div className={`w-12 h-12 rounded-full ${t.primary} flex items-center justify-center`}>
                    <MapPinned className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className={`text-sm ${t.textMuted}`}>Location</p>
                    <p className={`font-bold ${t.text}`}>{teacherData.location}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={`${t.card} rounded-2xl p-2 border ${t.border} overflow-hidden`}>
              <div className={`aspect-video rounded-xl ${t.bg === 'bg-slate-50' ? 'bg-slate-200' : 'bg-slate-800'} flex items-center justify-center`}>
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-slate-400 mx-auto mb-2" />
                  <p className={`${t.textMuted} font-medium`}>Google Maps</p>
                  <p className={`text-sm ${t.textMuted}`}>Embed your location here</p>
                  <p className="text-xs text-slate-400 mt-1">Replace with &lt;iframe&gt; from Google Maps</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const Footer = ({ currentTheme }) => {
  const t = themes[currentTheme]

  return (
    <footer className={`${t.footer} text-white py-12`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap className="w-8 h-8 text-blue-400" />
              <span className="text-xl font-bold">{teacherData.name}</span>
            </div>
            <p className="text-slate-400 mb-4 max-w-md">
              Providing quality education to students across Sri Lanka. Helping build a brighter future through academic excellence.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-red-600 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-black transition-colors">
                <Video className="w-5 h-5" />
              </a>
              <a href={`https://wa.me/${teacherData.whatsapp.replace(/[^0-9]/g, '')}`} className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-emerald-500 transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#classes" className="hover:text-white transition-colors">Classes</a></li>
              <li><a href="#schedule" className="hover:text-white transition-colors">Schedule</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Subjects</h4>
            <ul className="space-y-2 text-slate-400">
              {teacherData.subjects.map((subj, idx) => (
                <li key={idx}>{subj}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-slate-400 text-sm">
          <p>© {new Date().getFullYear()} {teacherData.name}. All rights reserved.</p>
          <p className="mt-2">Designed for Sri Lankan Education Excellence</p>
        </div>
      </div>
    </footer>
  )
}

const FloatingWhatsApp = () => {
  return (
    <a href={`https://wa.me/${teacherData.whatsapp.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer"
       className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-emerald-500 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform hover:shadow-emerald-500/50 animate-bounce-slow">
      <MessageCircle className="w-7 h-7" />
    </a>
  )
}

// ==================== MAIN APP ====================
function App() {
  const [currentTheme, setCurrentTheme] = useState('light')

  const toggleTheme = () => {
    setCurrentTheme(prev => prev === 'light' ? 'dark' : 'light')
  }

  useEffect(() => {
    document.documentElement.classList.toggle('dark', currentTheme === 'dark')
  }, [currentTheme])

  return (
    <div className={`min-h-screen transition-colors duration-300 ${themes[currentTheme].bg}`}>
      <Navbar toggleTheme={toggleTheme} currentTheme={currentTheme} />
      <Hero currentTheme={currentTheme} />
      <About currentTheme={currentTheme} />
      <Classes currentTheme={currentTheme} />
      <Results currentTheme={currentTheme} />
      <Schedule currentTheme={currentTheme} />
      <Gallery currentTheme={currentTheme} />
      <FAQ currentTheme={currentTheme} />
      <Contact currentTheme={currentTheme} />
      <Footer currentTheme={currentTheme} />
      <FloatingWhatsApp />
    </div>
  )
}

export default App
