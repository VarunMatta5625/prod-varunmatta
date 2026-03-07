import SectionHeading from "@/components/ui/section-heading";
import DoctorCard from "@/components/cards/doctor-card";

const doctors = [
    {
        name: "Dr. Himadri Chaudary",
        specialization: "Ayurveda Practitioner (BAMS, MD)",
        experience: "10 Yrs Experience",
        rating: 4.9,
        avatarInitials: "HC",
        avatarColor: "#228573",
        specialties: ["Nutrition", "Digestion", "Stress Relief", "Skin Care", "Weight Loss"],
    },
    {
        name: "Dr. Priya Nair",
        specialization: "Ayurveda Practitioner (BAMS, MD)",
        experience: "8 Yrs Experience",
        rating: 4.9,
        avatarInitials: "PN",
        avatarColor: "#3aa692",
        specialties: ["Women's Health", "Hormonal Balance", "Detox", "Joint Pain", "Sleep"],
    },
    {
        name: "Dr. Anand Sharma",
        specialization: "Ayurveda Specialist (BAMS, PhD)",
        experience: "12 Yrs Experience",
        rating: 4.9,
        avatarInitials: "AS",
        avatarColor: "#065b4b",
        specialties: ["Diabetes", "Hypertension", "Immunity", "Respiratory", "Liver Care"],
    },
];

export default function ExpertsSection() {
    return (
        <section id="experts" className="py-20 bg-white">
            <div className="max-w-[1440px] mx-auto px-6 lg:px-[92px]">
                <div className="mb-14">
                    <SectionHeading title="Meet our experts" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                    {doctors.map((doc) => (
                        <DoctorCard key={doc.name} {...doc} />
                    ))}
                </div>

                {/* View all CTA */}
                <div className="flex justify-center mt-12">
                    <button className="px-10 py-3.5 rounded-full border-2 border-[#228573] text-[#228573] font-semibold text-base hover:bg-[#228573] hover:text-white transition-all duration-200">
                        View All Doctors
                    </button>
                </div>
            </div>
        </section>
    );
}
