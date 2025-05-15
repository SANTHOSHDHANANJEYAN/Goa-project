import Image from "next/image";

export default function SchedulePage() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6 py-10 font-sans">
      <div className="max-w-4xl w-full text-center">
        <h1 className="text-3xl font-bold text-blue-900 mb-4">Sample Daily Schedule</h1>
        <p className="text-gray-700 mb-6">
          House of Om team will share with you an extraordinary experience every day. The program is structured to have a wonderful balance of yoga practice, alignment, anatomy, teaching methodology and philosophy. Transformational 20 days will be guided by our amazing teachers. Globally renowned experts will pass experience and flavor to yoga to you.
        </p>
        <hr className="border-gray-300 mb-6" />

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="text-left text-blue-900 space-y-2">
            <p><strong>6.00 - 6.15 :</strong> Shatkarma</p>
            <p><strong>6.15 - 6.30 :</strong> Chanting</p>
            <p><strong>6.30 - 7.45 :</strong> Asana & Pranayama</p>
            <p><strong>8.00 - 8.45 :</strong> Morning Lab</p>
            <p><strong>8.45 - 10.00 :</strong> Breakfast</p>
            <p><strong>10.00 - 12.30 :</strong> Jnana Yoga</p>
            <p><strong>12.45 - 13.15 :</strong> Yoga Nidra</p>
            <p><strong>13.30 - 15.00 :</strong> Lunch</p>
            <p><strong>15.00 - 16.00 :</strong> Teaching methodology</p>
            <p><strong>16.00 - 17.15 :</strong> Alignment & adjustment</p>
            <p><strong>17.30 - 18.30 :</strong> Evening Sadhana</p>
            <p><strong>18.30 - 19.30 :</strong> Dinner</p>
          </div>

          <div className="flex justify-center">
            <Image
              src="/schedule-image.jpg" // Replace this with the actual image path in /public
              alt="Yoga Class"
              width={400}
              height={300}
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}