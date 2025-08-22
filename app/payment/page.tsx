'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

const paymentMethods = [
  {
    id: 'course',
    title: 'Course Payment',
    subtitle: 'Yoga Teacher Training Fees',
    image: '/icon/coursepay-min.jpg',
    link: '/coursepayemnt',
  },
  {
    id: 'retreat',
    title: 'Retreat Payment',
    subtitle: 'Book Your Yoga Retreat',
    image: '/icon/Retreatpay.png',
    link: '/Retreatpayment',
  },
];

export default function PaymentSelection() {
  const [selected, setSelected] = useState<string | null>(null);
  const router = useRouter();

  const handleClick = (methodId: string) => {
    setSelected(methodId);
    const selectedMethod = paymentMethods.find((m) => m.id === methodId);
    if (selectedMethod?.link) {
      setTimeout(() => {
        router.push(selectedMethod.link);
      }, 400);
    }
  };

  return (
    <section className="w-full flex flex-col items-center pt-[12rem] pb-16 bg-transparent">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-extrabold mb-2 tracking-wide"
        style={{ color: '#150e70' }}
      >
        BOOK YOUR SLOTS
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="mb-10 text-center max-w-xl text-lg"
        style={{ color: '#000' }}
      >
        Please choose whether you're paying for a Yoga Teacher Training course or a Yoga Retreat.
      </motion.p>

      {/* Payment Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 w-full max-w-4xl px-6">
        {paymentMethods.map((method) => (
          <motion.div
            key={method.id}
            onClick={() => handleClick(method.id)}
            whileHover={{
              scale: 1.07,
              boxShadow: '0px 12px 30px rgba(0, 0, 0, 0.3)',
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 150, damping: 12 }}
            className={`relative cursor-pointer rounded-3xl overflow-hidden border transition-all duration-500 bg-white shadow-xl ${
              selected === method.id
                ? 'border-black ring-4 ring-black/20 scale-105'
                : 'border-gray-300'
            }`}
          >
            <div className="relative w-full h-56">
              <Image
                src={method.image}
                alt={method.title}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="p-6 flex flex-col items-center text-center bg-white">
              <h3 className="text-2xl font-bold" style={{ color: '#150e70' }}>
                {method.title}
              </h3>
              <p className="text-sm mt-2" style={{ color: '#000' }}>
                {method.subtitle}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Proceed Button */}
      {selected && (
        <motion.button
          onClick={() => {
            const selectedMethod = paymentMethods.find((m) => m.id === selected);
            if (selectedMethod?.link) {
              router.push(selectedMethod.link);
            }
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          whileHover={{
            scale: 1.07,
            backgroundColor: '#150e70',
            color: '#fff',
            boxShadow: '0px 10px 25px rgba(21, 14, 112, 0.4)',
          }}
          whileTap={{ scale: 0.95 }}
          className="mt-12 px-10 py-4 text-lg rounded-2xl shadow-lg font-semibold tracking-wide transition-all duration-300 bg-black text-white"
        >
          Proceed with {paymentMethods.find((m) => m.id === selected)?.title}
        </motion.button>
      )}
              {/* Payment Guidelines Section */}
        <div className="mt-12 bg-[#f3f4f6] border-l-4 border-[#150e70] rounded-xl p-6 shadow-sm">
          <h3 className="text-xl md:text-2xl font-bold text-[#150e70] mb-3">Payment Guidelines</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm md:text-base">
            <li>Advance payment is required to confirm your booking. Remaining balance is payable upon arrival.</li>
            <li>We accept online payments via Razorpay (INR) and PayPal (International).</li>
            <li>Please carry a valid ID proof at check-in.</li>
            <li>Advance payments are non-refundable but transferable to a future retreat within 12 months.</li>
            <li>Contact our support team for any payment-related queries.</li>
          </ul>
        </div>
    </section>
    
  );
  

}
