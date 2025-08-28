import { NeonGradientCard } from "@/components/magicui/neon-gradient-card";
import Image from "next/image";

export default function Me() {
  return (
    <NeonGradientCard className="w-fit h-fit ">
      <Image
        src="/me.jpg"
        alt="Yuri Melo"
        width={250}
        height={250}
        className="rounded-full"
      />
    </NeonGradientCard>
  );
}
