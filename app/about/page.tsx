  import Image from 'next/image';
  import Link from 'next/link';
  import { Button } from '@/components/ui/button';
<style>
  {`html { scroll-behavior: smooth; }`}
</style>
  export default function AboutPage() {
    return (
      
      <div className="pt-24">
        {/* Hero Section */}
        <section className="py-16 md:py-20 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6 animate-fade-in">About Us</h1>
              <p className="text-lg text-muted-foreground animate-fade-in animation-delay-300">
              Yoga Teacher Training does not necessarily mean performing difficult asanas which pertain to abject failure, the process is inclined towards replenishment of our heart, mind, and soul, it blends them to carve a shiny new personality. Our school is a haven for the mind, body, and spirit, welcoming both beginners and experienced yogis. Join us to explore the magic of yoga through our retreats and teacher training programs in the peaceful setting of Goa.
              </p>
            </div>
          </div>
        </section>

        {/* Our Journey */}
        <section className="bg-transparent py-16 px-6 md:px-10 rounded-lg max-w-7xl mx-auto shadow-lg hover:shadow-2xl transition-shadow duration-300">
  <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
    {/* Image with abstract background shapes */}
    <div className="relative w-60 h-60 flex-shrink-0 mb-8 md:mb-0">
      {/* Background blob shape (optional style, adjust as needed) */}
      <div className="absolute -inset-5 rounded-full bg-yellow-200 opacity-40 blur-lg z-0"></div>
      <Image
        src="/gangesh sir.jpg" // Replace with your image path
        alt="Gangesha Chaitanya"
        width={240}
        height={240}
        className="rounded-full object-cover z-10 relative shadow-lg border-4 border-yellow-300 transform hover:scale-105 transition-transform duration-300"
      />
    </div>

    {/* Content */}
    <div className="flex-1">
      <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-tight tracking-wide">
        Gangesha Chaitanya
      </h2>
      <h3 className="mt-2 font-semibold text-xl text-gray-800 uppercase tracking-wide">
        (Yoga Philosophy, Meditation, Pranayama And Spiritual Guidance)
      </h3>

      <p className="text-lg text-gray-800 mt-6 leading-relaxed">
        Discover the enchanting world of Yogi Gangesha Chaitanya, a true master of Yoga Philosophy,
        Meditation, Pranayama, and Spiritual Guidance. From a tender age, he was drawn to the realm of
        spirituality, and under the tutelage of the revered saint Swami Rama, he bloomed into a beacon
        of profound wisdom and compassion. His spiritual journey led him to prestigious yoga institutions,
        including the Himalayan tradition, Sri Aurobindo Ashram, Brahama Kumaris, and the Maha Yana Buddhist
        tradition, where he soaked in diverse teachings that added a captivating blend of ancient and
        modern insights to his classes.
      </p>

      <p className="text-lg text-gray-800 mt-4 leading-relaxed">
        With a deep understanding of meditation, Kundalini yoga, and pranayama, Yogi Gangesha inspires his
        students to awaken the dormant kundalini energy within, reaching for higher planes of consciousness.
        But what sets him apart is his ability to infuse novelty and variety into each class, creating a
        harmonious fusion of tradition and innovation.
      </p>

      <p className="text-lg text-gray-800 mt-4 leading-relaxed">
        In his classes, you’ll experience a serene aura of compassion and guidance, inviting you to explore
        the infinite potential of your mind and spirit. Join Yogi Gangesha Chaitanya on a transformative
        journey of self-discovery, as he unveils the magic of meditation, pranayama, and spiritual wisdom.
        Let his radiant light lead you towards inner harmony and enlightenment. Embrace the mystical journey,
        and awaken the true essence of your being under the expert guidance of Yogi Gangesha Chaitanya.
      </p>
    </div>
  </div>
</section>



       <section className="bg-transparent py-16 px-6 md:px-10 rounded-lg max-w-7xl mx-auto shadow-lg hover:shadow-2xl transition-shadow duration-300">
  <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
    {/* Image with abstract background shapes */}
    <div className="relative w-60 h-60 flex-shrink-0 mb-8 md:mb-0">
      {/* Background blob shape (optional style, adjust as needed) */}
      <div className="absolute -inset-5 rounded-full bg-yellow-200 opacity-40 blur-lg z-0"></div>
      <Image
        src="/Abin Ji.jpg" // Replace with your image path
        alt="Abin Ji"
        width={240}
        height={240}
        className="rounded-full object-cover z-10 relative shadow-lg border-4 border-yellow-300 transform hover:scale-105 transition-transform duration-300"
      />
    </div>

    {/* Content */}
    <div className="flex-1">
      <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-tight tracking-wide">
      Abin Ji
      </h2>
      <h3 className="mt-2 font-semibold text-xl text-gray-800 uppercase tracking-wide">
        (Philosophy, Meditation & Pranayama)
      </h3>

      <p className="text-lg text-gray-800 mt-6 leading-relaxed">
      Meet Abin, whose fascination with yoga’s spiritual aspects and metaphysics began in his early years. 
      His spiritual journey led him to initiation into the Mantra marga of the Kaula tradition and later into Kriya Yoga of Sri Shyama Charan Lahiri’s lineage.
      As you walk the path with Abin Ji, immerse yourself in the wisdom of his teachings. 
      With his profound grasp of yoga philosophy and practice, discover new dimensions of inner peace and self-awareness. 
      Allow Abin Ji’s guidance to illuminate your journey toward harmony, balance, and spiritual growth. 
      Every moment spent in his presence offers a chance for personal transformation and enlightenment. 
      Surrender to the wisdom he imparts and embrace the journey of self-realization with open arms
      </p>

      <p className="text-lg text-gray-800 mt-4 leading-relaxed">
      Abin’s career took interesting turns, from teaching math for GRE/GMAT exams to working in Process Excellence and Analytics before transitioning to full-time yoga teaching. 
      He completed Yoga Alliance accredited 200 Hour and 300 Hour courses.
      </p>

      <p className="text-lg text-gray-800 mt-4 leading-relaxed">
      In his classes, Abin covers philosophy, asanas, pranayama, meditation, yoga nidra, and mantra chanting. 
      His philosophy classes delve into Vedanta, Samkhya, Yoga Sutra, and Tantra, while his teaching style is influenced by Ashtanga Vinyasa, Bihar School of Yoga, and the Ghosh School.
      </p><br />
      <p>Abin skillfully combines spirituality and practicality, creating holistic yoga experiences for his students.</p>
    </div>
  </div>
</section>

<section className="bg-transparent py-16 px-6 md:px-10 rounded-lg max-w-7xl mx-auto shadow-lg hover:shadow-2xl transition-shadow duration-300">
  <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
    {/* Image with abstract background shapes */}
    <div className="relative w-60 h-60 flex-shrink-0 mb-8 md:mb-0">
      {/* Background blob shape (optional style, adjust as needed) */}
      <div className="absolute -inset-5 rounded-full bg-yellow-200 opacity-40 blur-lg z-0"></div>
      <Image
        src="/Arshdeep Singh Behal.jpg" // Replace with your image path
        alt="Arshdeep Singh Behal"
        width={240}
        height={240}
        className="rounded-full object-cover z-10 relative shadow-lg border-4 border-yellow-300 transform hover:scale-105 transition-transform duration-300"
      />
    </div>

    {/* Content */}
    <div className="flex-1">
      <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-tight tracking-wide">
      Arshdeep Singh Behal
      </h2>
      <h3 className="mt-2 font-semibold text-xl text-gray-800 uppercase tracking-wide">
        (Teaching Methodology)
      </h3>

      <p className="text-lg text-gray-800 mt-6 leading-relaxed">
      He is a guide, a mentor, and a beacon of light for those seeking a deeper connection with themselves and the universe.
      With roots deeply embedded in the wisdom of the Himalayan traditions, he brings a unique blend of ancient practices and modern understanding to his teaching. 
      His approach to yoga is more than physical postures; it is an invitation to explore the boundless possibilities of the mind, body, and spirit.
      Inspired by his studies under various Himalayan teachers, his classes are a journey into the heart of yoga. 
      He expertly weaves together the rich tapestry of Pranayama and Teaching Methodology, creating a holistic experience that resonates on every level of being. 
      His sessions are crafted to help students tap into their inner reservoirs of strength and clarity, fostering a deep sense of peace and fulfillment.
      </p>

      <p className="text-lg text-gray-800 mt-4 leading-relaxed">
      What sets him apart is his ability to make yoga accessible and meaningful for everyone. 
      Whether you are a seasoned practitioner or stepping onto the mat for the first time, Arshdeep’s warm and inclusive teaching style welcomes you to explore and expand your practice. 
      He believes in the transformative power of yoga to heal, empower, and awaken, guiding each student with compassion and insight on their personal journey.
      </p>

      <p className="text-lg text-gray-800 mt-4 leading-relaxed">
      Join Arshdeep to experience yoga that goes beyond the ordinary. 
      His teachings offer a sanctuary where you can release stress, cultivate mindfulness, and connect with your true self. 
      With Arshdeep, yoga becomes a journey of transformation, self-discovery, and profound inner peace, illuminating the path to a balanced and harmonious life. 
      Embrace the opportunity to learn from a teacher who embodies the essence of yoga and inspires you to reach your highest potential.
      </p>
    </div>
  </div>
</section>

<section className="bg-transparent py-16 px-6 md:px-10 rounded-lg max-w-7xl mx-auto shadow-lg hover:shadow-2xl transition-shadow duration-300">
  <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
    {/* Image with abstract background shapes */}
    <div className="relative w-60 h-60 flex-shrink-0 mb-8 md:mb-0">
      {/* Background blob shape (optional style, adjust as needed) */}
      <div className="absolute -inset-5 rounded-full bg-yellow-200 opacity-40 blur-lg z-0"></div>
      <Image
        src="/Bipin Singh Pharswan.jpg" // Replace with your image path
        alt="Bipin Singh Pharswan"
        width={240}
        height={240}
        className="rounded-full object-cover z-10 relative shadow-lg border-4 border-yellow-300 transform hover:scale-105 transition-transform duration-300"
      />
    </div>

    {/* Content */}
    <div className="flex-1">
      <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-tight tracking-wide">
      Bipin Singh Pharswan
      </h2>
      <h3 className="mt-2 font-semibold text-xl text-gray-800 uppercase tracking-wide">
        (Ashtanga Vinyasa Yoga & Hatha Yoga)
      </h3>

      <p className="text-lg text-gray-800 mt-6 leading-relaxed">
      Meet Bipin Singh Pharswan, a certified yoga teacher at Rishikul Yogshala. 
      Bipin holds 200-hour Vinyasa and advanced 300-hour Ashtanga Vinyasa Teacher certifications, showcasing his dedication to yoga. 
      With experience from esteemed institutions like the Himalayan Yoga Association and AYM Yoga School, he’s honed his skills.
      </p>

      <p className="text-lg text-gray-800 mt-4 leading-relaxed">
      Bipin excels in Hatha Yoga and Ashtanga Vinyasa Yoga, blending tradition with modern techniques. 
      His expertise in Yoga Alignment ensures students benefit fully from each posture without risking injury. 
      Beyond physical practice, Bipin also understands yoga anatomy deeply.
      Join Bipin’s classes for authentic yoga guidance. 
      His passion for yoga and commitment to his students’ journey are unparalleled. 
      Explore yoga with Bipin Singh Pharswan at Rishikul Yogshala as your trusted guide.
      </p>

      <p className="text-lg text-gray-800 mt-4 leading-relaxed">
      In Bipin Singh Pharswan’s classes at Rishikul Yogshala, students experience a harmonious fusion of traditional wisdom and contemporary techniques. 
      With his comprehensive understanding of yoga alignment and anatomy, Bipin ensures students receive holistic guidance in their practice. 
      His unwavering passion for yoga and dedication to his students’ growth create an enriching and transformative learning environment. 
      Join Bipin on a journey of self-discovery and empowerment, where each session is an opportunity to deepen your yoga practice and nourish your mind, body, and spirit.
      </p>
    </div>
  </div>
</section>

<section className="bg-transparent py-16 px-6 md:px-10 rounded-lg max-w-7xl mx-auto shadow-lg hover:shadow-2xl transition-shadow duration-300">
  <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
    {/* Image with abstract background shapes */}
    <div className="relative w-60 h-60 flex-shrink-0 mb-8 md:mb-0">
      {/* Background blob shape (optional style, adjust as needed) */}
      <div className="absolute -inset-5 rounded-full bg-yellow-200 opacity-40 blur-lg z-0"></div>
      <Image
        src="/Himanshu Ji.jpg" // Replace with your image path
        alt="Himanshu Ji"
        width={240}
        height={240}
        className="rounded-full object-cover z-10 relative shadow-lg border-4 border-yellow-300 transform hover:scale-105 transition-transform duration-300"
      />
    </div>

    {/* Content */}
    <div className="flex-1">
      <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-tight tracking-wide">
      Himanshu Ji
      </h2>
      <h3 className="mt-2 font-semibold text-xl text-gray-800 uppercase tracking-wide">
        (Hatha & Ashtanga)
      </h3>

      <p className="text-lg text-gray-800 mt-6 leading-relaxed">
      Himanshu Ji is not just a yoga teacher; he’s a beacon of knowledge and inspiration in the world of yoga.
      Born and raised in the serene surroundings of Rishikesh, known as the Capital Yoga world, Himanshu Ji’s connection with yoga runs deep in his roots. 
      For several years, he has dedicated himself to teaching Ashtanga and Hatha Yoga at Pankaj Yogpeeth, where his classes are renowned for their energy and power. 
      Himanshu Ji’s journey into yoga began with humble steps as he spent years immersing himself in the practice under the guidance of numerous esteemed teachers and gurus. 
      Each encounter enriched his understanding and proficiency in yoga, shaping him into the exceptional teacher he is today. 
      His commitment to continuous learning led him to complete his studies in the very heart of yoga education, the vibrant city of Rishikesh.
      </p>

      <p className="text-lg text-gray-800 mt-4 leading-relaxed">
      In every class, Himanshu Ji infuses his teachings with profound philosophy, guiding students to explore the deeper dimensions of yoga beyond just the physical postures. 
      His deep understanding of yogic philosophy resonates through his words, inspiring practitioners to connect with their inner selves and discover the true essence of yoga. 
      Himanshu Ji’s expertise extends beyond asana practice; he delves into the realms of pranayama and meditation, offering transformative experiences that nurture the body, mind, and spirit. 
      With his gentle guidance, students embark on a journey of self-discovery, finding inner peace and harmony amidst the chaos of daily life.
      </p>
    </div>
  </div>
</section>

<section className="bg-transparent py-16 px-6 md:px-10 rounded-lg max-w-7xl mx-auto shadow-lg hover:shadow-2xl transition-shadow duration-300">
  <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
    {/* Image with abstract background shapes */}
    <div className="relative w-60 h-60 flex-shrink-0 mb-8 md:mb-0">
      {/* Background blob shape (optional style, adjust as needed) */}
      <div className="absolute -inset-5 rounded-full bg-yellow-200 opacity-40 blur-lg z-0"></div>
      <Image
        src="/pooja ji.jpg" // Replace with your image path
        alt="pooja ji"
        width={240}
        height={240}
        className="rounded-full object-cover z-10 relative shadow-lg border-4 border-yellow-300 transform hover:scale-105 transition-transform duration-300"
      />
    </div>

    {/* Content */}
    <div className="flex-1">
      <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-tight tracking-wide">
      Pooja Ji
      </h2>
      <h3 className="mt-2 font-semibold text-xl text-gray-800 uppercase tracking-wide">
        (Medititation & Pranayama)
      </h3>

      <p className="text-lg text-gray-800 mt-6 leading-relaxed">
      Meet Pooja, whose spiritual journey began with initiation by her master Gurudev HH Sri Sri Ravishankar, known for promoting peace and humanitarian values. 
      Raised in a Hindu family, chanting Sanskrit shlokas and mantras has been a part of her life since childhood. 
      She holds a master’s degree in Biomedical Genetics from VIT University, Vellore.
      Pooja’s passion for spirituality led her to pursue a career in yoga, teaching Pranayama, Meditation, and Chanting since she was 18. Her soothing voice and warm presence are appreciated by many.
      </p>

      <p className="text-lg text-gray-800 mt-4 leading-relaxed">
      Driven to share her wisdom, Pooja served in an ashram, reaching out to 42 villages in Karnataka. 
      Her ability to connect deeply touched many lives. 
      In 2015, she journeyed to Rishikesh, where she delved deeper into yoga under skilled yogis, igniting a divine connection within.
      </p>

      <p className="text-lg text-gray-800 mt-4 leading-relaxed">
      As you journey alongside Pooja, allow her radiant light to illuminate your path to inner peace and self-discovery. 
      With her expert guidance in pranayama, meditation, and philosophy, let go of all that weighs you down and embrace the transformative power of yoga. 
      Together, embark on an enchanting voyage towards a deeper connection with your true self, where every breath is a step closer to harmony and enlightenment. 
      Trust in Pooja to be your unwavering beacon of wisdom and compassion, guiding you towards a life filled with joy, serenity, and profound spiritual growth.
      </p>
    </div>
  </div>
</section>

<section className="bg-transparent py-16 px-6 md:px-10 rounded-lg max-w-7xl mx-auto shadow-lg hover:shadow-2xl transition-shadow duration-300">
  <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
    {/* Image with abstract background shapes */}
    <div className="relative w-60 h-60 flex-shrink-0 mb-8 md:mb-0">
      <div className="absolute -inset-5 rounded-full bg-yellow-200 opacity-40 blur-lg z-0"></div>
      <Image
        src="/Purnima hi.jpg"
        alt="Purnima hi"
        width={240}
        height={240}
        className="rounded-full object-cover z-10 relative shadow-lg border-4 border-yellow-300 transform hover:scale-105 transition-transform duration-300"
      />
    </div>

    {/* Content */}
    <div className="flex-1">
      <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-tight tracking-wide">
        Purnima hi
      </h2>
      <h3 className="mt-2 font-semibold text-xl text-gray-800 uppercase tracking-wide">
        (Yoga Philosophy, Meditation, Pranayama And Spiritual Guidance)
      </h3>

      <p className="text-lg text-gray-800 mt-6 leading-relaxed">
        Embark on a transformative journey with Purnima, whose spiritual quest began in the sacred lands of Karnataka, steeped in the teachings of Basavanna. 
        Through her deep-rooted spiritual upbringing, Purnima found herself drawn to the path of inner awakening at an early age. 
        Guided by revered mentors like Sri Ganeswer Avadhut and Swami Veda Bharthi, she delved into the profound practices of pranayama, meditation, and philosophy, enriching her spiritual journey.
      </p>

      <p className="text-lg text-gray-800 mt-4 leading-relaxed">
        Purnima’s radiant light guiding you towards inner peace. With expertise in pranayama, meditation, and philosophy, delve into the transformative power of yoga. 
        Embark on a journey towards deeper self-discovery and harmony. 
        Trust in Purnima’s wisdom to lead you towards profound spiritual growth. Let her be your unwavering beacon of compassion on this enchanting path.
      </p>

      <p className="text-lg text-gray-800 mt-4 leading-relaxed">
        In his classes, you’ll experience a serene aura of compassion and guidance, inviting you to explore
        the infinite potential of your mind and spirit. Join Yogi Gangesha Chaitanya on a transformative
        journey of self-discovery, as he unveils the magic of meditation, pranayama, and spiritual wisdom.
        Let his radiant light lead you towards inner harmony and enlightenment. Embrace the mystical journey,
        and awaken the true essence of your being under the expert guidance of Yogi Gangesha Chaitanya.
      </p>

      {/* Read More Button */}
    
    </div>
  </div>
</section>


<section className="bg-transparent py-16 px-6 md:px-10 rounded-lg max-w-7xl mx-auto shadow-lg hover:shadow-2xl transition-shadow duration-300">
  <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
    {/* Image with abstract background shapes */}
    <div className="relative w-60 h-60 flex-shrink-0 mb-8 md:mb-0">
      {/* Background blob shape (optional style, adjust as needed) */}
      <div className="absolute -inset-5 rounded-full bg-yellow-200 opacity-40 blur-lg z-0"></div>
      <Image
        src="/Rahul Negi.jpg" // Replace with your image path
        alt="Rahul Negi"
        width={240}
        height={240}
        className="rounded-full object-cover z-10 relative shadow-lg border-4 border-yellow-300 transform hover:scale-105 transition-transform duration-300"
      />
    </div>

    {/* Content */}
    <div className="flex-1">
      <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-tight tracking-wide">
      Rahul Negi
      </h2>
      <h3 className="mt-2 font-semibold text-xl text-gray-800 uppercase tracking-wide">
        (Hatha Yoga & Ashtanga)
      </h3>

      <p className="text-lg text-gray-800 mt-6 leading-relaxed">
      I'm Rahul Negi, a 23-year-old enthusiastic yoga teacher with over 6 years of experience. I graduated in yoga and gained in-depth knowledge of postures, breathing techniques, and the spiritual aspects of yoga.
      </p>

      <p className="text-lg text-gray-800 mt-4 leading-relaxed">
      journey alongside Rahul Negi, allow his expertise and passion for yoga to inspire and empower you.
      With his profound understanding of yoga philosophy and practice, embrace the transformative potential of each session. 
      Trust in Rahul’s guidance to lead you towards a life of balance, vitality, and inner peace. 
      Surrender to the wisdom he shares, and embark on a journey of self-discovery and holistic well-being. 
      Let Rahul Negi be your guiding light on this path to a healthier, happier, and more harmonious life.
      </p>
    </div>
  </div>
</section>

<section className="bg-transparent py-16 px-6 md:px-10 rounded-lg max-w-7xl mx-auto shadow-lg hover:shadow-2xl transition-shadow duration-300">
  <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
    {/* Image with abstract background shapes */}
    <div className="relative w-60 h-60 flex-shrink-0 mb-8 md:mb-0">
      {/* Background blob shape (optional style, adjust as needed) */}
      <div className="absolute -inset-5 rounded-full bg-yellow-200 opacity-40 blur-lg z-0"></div>
      <Image
        src="/Rishi Raj.jpg" // Replace with your image path
        alt="Rishi Raj"
        width={240}
        height={240}
        className="rounded-full object-cover z-10 relative shadow-lg border-4 border-yellow-300 transform hover:scale-105 transition-transform duration-300"
      />
    </div>

    {/* Content */}
    <div className="flex-1">
      <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-tight tracking-wide">
      Rishi Raj
      </h2>
      <h3 className="mt-2 font-semibold text-xl text-gray-800 uppercase tracking-wide">
        (Philosophy & Meditation)
      </h3>

      <p className="text-lg text-gray-800 mt-6 leading-relaxed">
      Rishi Raj, a seasoned practitioner of Osho Meditation and various traditional meditation techniques, has honed his expertise through years of dedicated practice and teaching.
      Having undergone extensive training at the renowned OSHO INTERNATIONAL MEDITATION RESORT in Pune, Maharashtra, India, Rishi Raj has emerged as a beacon of meditative wisdom and experience. 
      His journey has taken him through the depths of different meditative practices, enriching his understanding of the human psyche and spirituality.
      </p>

      <p className="text-lg text-gray-800 mt-4 leading-relaxed">
      Residing amidst the tranquil environs of Rishikesh, Rishi Raj continues to impart his profound knowledge and meditative insights to seekers from all walks of life. 
      With a blend of playfulness and profoundness, his classes resonate with students who find solace and joy in the meditative journey he guides them through. 
      Rishi Raj’s unique approach to organizing, teaching, and facilitating meditation transcends the boundaries of tradition, integrating scientific understanding with spiritual wisdom.
      </p>
    </div>
  </div>
</section>

<section className="bg-transparent py-16 px-6 md:px-10 rounded-lg max-w-7xl mx-auto shadow-lg hover:shadow-2xl transition-shadow duration-300">
  <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
    {/* Image with abstract background shapes */}
    <div className="relative w-60 h-60 flex-shrink-0 mb-8 md:mb-0">
      {/* Background blob shape (optional style, adjust as needed) */}
      <div className="absolute -inset-5 rounded-full bg-yellow-200 opacity-40 blur-lg z-0"></div>
      <Image
        src="/Sukra Chaitanya.jpg" // Replace with your image path
        alt="Sukra Chaitanya"
        width={240}
        height={240}
        className="rounded-full object-cover z-10 relative shadow-lg border-4 border-yellow-300 transform hover:scale-105 transition-transform duration-300"
      />
    </div>

    {/* Content */}
    <div className="flex-1">
      <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-tight tracking-wide">
      Sukra Chaitanya
      </h2>
      <h3 className="mt-2 font-semibold text-xl text-gray-800 uppercase tracking-wide">
        (Mantra, Meditation, Pranayama)
      </h3>

      <p className="text-lg text-gray-800 mt-6 leading-relaxed">
      Welcome to the serene world of Yogi Sukra Chaitanya, hailing from the charming villages of West Odisha, India.
      He immersed himself in the study of human nature and the environment, mastering educational psychology and environmental sciences at Sambalpur University.
      Seeking deeper wisdom, he ventured into the spiritual realm, diving into Yoga Sciences and Indian Philosophy at Dev Sanskriti Haridwar University.
      </p>

      <p className="text-lg text-gray-800 mt-4 leading-relaxed">
      Under the guidance of renowned masters like Swami Veda Bharati from the Himalayan Tradition, Yogi Sukra Chaitanya embarked on a journey to greater heights.
      He further honed his skills in traditional Kriya yoga under the wise mentorship of Swami Sankaranand Giri and Swami Nityanandaji of the Yoga Satsang Society, India.
      </p>

      <p className="text-lg text-gray-800 mt-4 leading-relaxed">
      Yogi Sukra Chaitanya’s teachings resonate like a beautiful symphony, bringing harmony to the mind, body, and soul, attracting seekers from around the world.
      With each breath, his students uncover the profound treasures within themselves, guided by the wisdom of a true master.
      </p><br />
      <p>In his classes, Yogi Sukra Chaitanya infuses ancient wisdom with modern insights, creating a harmonious blend of tradition and innovation.
        Through his innovative approach, he inspires students to explore the depths of their being, unlocking their innate potential for growth and transformation.
        With compassion and guidance, Yogi Sukra Chaitanya leads his students on a transformative journey towards self-discovery, inner peace, and enlightenment.</p>
    </div>
  </div>
</section>

<section className="bg-transparent py-16 px-6 md:px-10 rounded-lg max-w-7xl mx-auto shadow-lg hover:shadow-2xl transition-shadow duration-300">
  <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
    {/* Image with abstract background shapes */}
    <div className="relative w-60 h-60 flex-shrink-0 mb-8 md:mb-0">
      {/* Background blob shape (optional style, adjust as needed) */}
      <div className="absolute -inset-5 rounded-full bg-yellow-200 opacity-40 blur-lg z-0"></div>
      <Image
        src="/Yogesh Ji.jpg" // Replace with your image path
        alt="Yogesh Ji"
        width={240}
        height={240}
        className="rounded-full object-cover z-10 relative shadow-lg border-4 border-yellow-300 transform hover:scale-105 transition-transform duration-300"
      />
    </div>

    {/* Content */}
    <div className="flex-1">
      <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-tight tracking-wide">
      Yogesh Ji
      </h2>
      <h3 className="mt-2 font-semibold text-xl text-gray-800 uppercase tracking-wide">
        (Philosophy, Meditation & Pranayama)
      </h3>

      <p className="text-lg text-gray-800 mt-6 leading-relaxed">
      Meet Yogesh from Nepal, a passionate yoga professional with qualifications in meditation, Reiki healing, singing bowl therapy, yoga therapy, and classical music.
      His inspiring dedication and friendly demeanor make him approachable to all, with a great sense of humor.
      </p>

      <p className="text-lg text-gray-800 mt-4 leading-relaxed">
      journey alongside Yogesh Ji, immerse yourself in the transformative power of his teachings. 
      With his wealth of knowledge in yoga, meditation, and holistic healing practices, discover new depths of inner peace and well-being. 
      Allow Yogesh Ji’s gentle guidance to lead you towards a life filled with balance, serenity, and spiritual growth. 
      Surrender to the wisdom he shares, embracing each moment as an opportunity for personal transformation. 
      Let Yogesh Ji be your trusted companion on this sacred journey of self-discovery and enlightenment. 
      Together, explore the boundless potential of mind, body, and spirit, as you awaken to your true essence.
      </p>
    </div>
  </div>
</section>


        {/* Philosophy */}
        <section className="py-16 md:py-24 bg-transparent relative overflow-hidden">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center text-shadow-md">
      Our Customers' Reviews
    </h2>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
      {/* Review 1 */}
     <div
  className="order-2 lg:order-1 relative p-6 rounded-lg shadow-2xl transition-transform transform hover:scale-105 hover:shadow-2xl hover:translate-y-2 duration-300 bg-[bisque]"
>

        <div className="flex items-center mb-4 ">
          <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
            <Image
              src="/review1.jpg"
              alt="Customer 1"
              width={64}
              height={64}
              className="object-cover"
            />
          </div>
          <div>
            <h3 className="font-bold text-lg text-gray-900">Fabi Porta</h3>
            <p className="text-sm text-gray-500">Yoga Enthusiast</p>
          </div>
        </div>
        <p className="text-13 text-gray-800 leading-relaxed">
        “It was for sure an incredible journey to have had the course with Rishikul Yogshala, I’ve learnt for life! I’m confident to say it as I’ve been practicing at home ever since I concluded the course and honestly I’ve never felt so natural and inspired during my own practice.!! I can easily incorporate the teaching guidance, the flow, the pace, the minor details on explaining the asanas.the relaxation and even pranayama. I was amazed to feel so comfortable in teaching myself and others after such a quick course but for sure a strong, traditional, grounded, reliable and unforgiven training. I could only classify it as ‘WONDERFUL’ ..!!Specially being in Pohkara, Goa – a magical destination!"
        </p>
      </div>

      {/* Review 2 */}
      <div className="order-1 lg:order-2 relative bg-[bisque] p-6 rounded-lg shadow-2xl transition-transform transform hover:scale-105 hover:shadow-2xl hover:translate-y-2 duration-300">
        <div className="flex items-center mb-4">
          <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
            <Image
              src="/review2.jpg"
              alt="Customer 2"
              width={64}
              height={64}
              className="object-cover"
            />
          </div>
          <div>
            <h3 className="font-bold text-lg text-gray-900">Maithe Vl
            </h3>
            <p className="text-sm text-gray-500">Health & Wellness Coach</p>
          </div>
        </div>
        <p className="text-15 text-gray-800 leading-relaxed">
        We visited Rishikul Yogshala for the second time this February, the first was in July 2013. That visit changed my life so completely and in such a fulfilling way – I just felt drawn back to this school and their teachers. I am so happy I did return. Being around such inspiring, energetic and wise people, I feel truly blessed and moreover,It was for sure an incredible journey to have had the course.with Rishikul Yogshala,I’ve learnt for life! I’m confident to say it as I’ve been practicing at home ever since I concluded the course and honestly I’ve never felt so natural and inspired during my own practice.!! I can easily incorporate the teaching guidance, the flow, the pace, the minor details on explaining the asanas."
        </p>
      </div>
    </div>

    <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
      {/* Review 3 */}
      <div className="order-2 lg:order-1 relative bg-[bisque] p-6 rounded-lg shadow-2xl transition-transform transform hover:scale-105 hover:shadow-2xl hover:translate-y-2 duration-300">
        <div className="flex items-center mb-4">
          <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
            <Image
              src="/review3.jpg"
              alt="Customer 3"
              width={64}
              height={64}
              className="object-cover"
            />
          </div>
          <div>
            <h3 className="font-bold text-lg text-gray-900">Sarah Schu
            </h3>
            <p className="text-sm text-gray-500">Yoga Practitioner</p>
          </div>
        </div>
        <p className="text-15 text-gray-800 leading-relaxed">
        “It’s hard to review a program that spans a month, but overall I would describe the Rishikul 200hr program in Goa as challenging, life changing, and inspiring. The days were really long, but packed with so much new information that I was never bored. I really connected with each of the six instructors. It was for sure an incredible journey to have had the course with Rishikul Yogshala, I’ve learnt for life! I’m confident to say it as I’ve been practicing at home ever since I concluded the course and honestly I’ve never felt so natural and inspired during my own practice.!! I can easily incorporate the teaching guidance, the flow, the pace, the minor details on explaining the asanas, and cannot thank them enough for the impact they had and will continue to have in my life."
        </p>
      </div>

      {/* Review 4 */}
      <div className="order-1 lg:order-2 relative bg-[bisque] p-6 rounded-lg shadow-2xl transition-transform transform hover:scale-105 hover:shadow-2xl hover:translate-y-2 duration-300">
        <div className="flex items-center mb-4">
          <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
            <Image
              src="/review4.jpg"
              alt="Customer 4"
              width={64}
              height={64}
              className="object-cover"
            />
          </div>
          <div>
            <h3 className="font-bold text-lg text-gray-900">Natasha Thompson
            </h3>
            <p className="text-sm text-gray-500">Mindfulness Practitioner</p>
          </div>
        </div>
        <p className="text-15 text-gray-800 leading-relaxed">
        "There’s one thing for certain, I’m not the same person I was 28 days ago before starting this yoga teacher training program. My life has been changed in the most beautiful and positive sense of the word. There really are not enough thank you’s in the It was for sure an incredible journey to have had the course with Rishikul Yogshala, I’ve learnt for life! I’m confident to say it as I’ve been practicing at home ever since I concluded the course and honestly I’ve never felt so natural and inspired during my own practice.!! I can easily incorporate the teaching guidance, the flow, the pace, the minor details on explaining the asanas, world to fully express the extreme gratitude I feel towards Rishikul Yogashala and its teachers for providing me with this opportunity."
        </p>
      </div>
    </div>

    {/* Decorative Flourishes */}
    <div className="absolute top-0 left-10 w-36 h-36 bg-yellow-100 opacity-40 blur-3xl rounded-full z-0 animate-pulse"></div>
    <div className="absolute bottom-0 right-10 w-48 h-48 bg-yellow-200 opacity-30 blur-3xl rounded-full z-0 animate-pulse"></div>

    {/* Decorative Borders */}
    <div className="absolute top-0 left-0 w-full h-1 bg-yellow-200 opacity-30 z-0"></div>
    <div className="absolute bottom-0 left-0 w-full h-1 bg-yellow-200 opacity-30 z-0"></div>
  </div>
</section>







        {/* Team */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl md:text-4xl mb-6">Blogs</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Meet our experienced and compassionate instructors dedicated to guiding you on your wellness journey
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Maya Wilson",
                  role: "Founder & Lead Yoga Instructor",
                  image: "https://images.pexels.com/photos/5386541/pexels-photo-5386541.jpeg",
                  bio: "With over 20 years of practice and study across India and Nepal, Maya brings depth and authenticity to her teachings.",
                },
                {
                  name: "David Chen",
                  role: "Meditation & Mindfulness Guide",
                  image: "https://images.pexels.com/photos/4608208/pexels-photo-4608208.jpeg",
                  bio: "A former Buddhist monk, David specializes in mindfulness meditation and stress reduction techniques.",
                },
                {
                  name: "Leila Patel",
                  role: "Sound Healing Practitioner",
                  image: "https://images.pexels.com/photos/5922764/pexels-photo-5922764.jpeg",
                  bio: "Certified in sound therapy, Leila creates transformative experiences using singing bowls and other instruments.",
                },
              ].map((teacher, index) => (
                <div key={teacher.name} className="bg-card rounded-lg overflow-hidden shadow-sm animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
                  <div className="aspect-[3/4] relative">
                    <Image
                      src={teacher.image}
                      alt={teacher.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-xl font-medium mb-1">{teacher.name}</h3>
                    <p className="text-accent mb-3">{teacher.role}</p>
                    <p className="text-muted-foreground">{teacher.bio}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button asChild>
                <Link href="/services">Explore Our Services</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl md:text-4xl mb-6">FAQs</h2>
              <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
                The principles that guide everything we do at House of Om
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Authenticity",
                  description: "We honor traditional practices while making them accessible for contemporary life."
                },
                {
                  title: "Inclusivity",
                  description: "We welcome all individuals regardless of background, experience level, or ability."
                },
                {
                  title: "Compassion",
                  description: "We approach each person with kindness, understanding, and genuine care."
                },
                {
                  title: "Growth",
                  description: "We encourage continuous learning, personal development, and transformation."
                },
                {
                  title: "Community",
                  description: "We foster meaningful connections and a sense of belonging among our members."
                },
                {
                  title: "Balance",
                  description: "We promote harmony between body, mind, and spirit for holistic wellbeing."
                },
              ].map((value, index) => (
                <div key={value.title} className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <h3 className="font-serif text-xl font-medium mb-3">{value.title}</h3>
                  <p className="text-primary-foreground/80">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  }