import Button from "@/components/cuipe/Button";
import Delete from "@/components/icons/Delete";
import Loading from "@/components/icons/Loading";

export default function Home() {
    return <main className="p-5 ">
        <Button  variant="disabled"  size="sm" preIcon={<Loading svgProps={{ className: "w-1 h-1 animate-spin" }}/>} > parham aghas </Button>
        <Button  variant="disabled"  size="md" preIcon={<Loading/>} > parham aghas </Button>
        <Button  variant="disabled"  size="lg" preIcon={<Loading/>} > parham aghas </Button>
    </main>;
}
