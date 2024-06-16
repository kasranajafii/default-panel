import Button from "@/components/cuipe/Button";
import Delete from "@/components/icons/Delete";
import Loading from "@/components/icons/Loading";

export default function Home() {
    return <main className="p-5">
        <Button  variant="disabled"  size="lg" preIcon={<Loading/>} > parham </Button>
    </main>;
}
