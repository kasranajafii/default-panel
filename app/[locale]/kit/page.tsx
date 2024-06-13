import { Button } from "@/components/ui/button";

export default function Home() {
    return (
        <div className="flex gap-10 justify-start items-start flex-col p-6">
            <div className="flex gap-10 justify-start items-center">
                <Button variant={"primary"}>primary default</Button>
                <Button variant={"primary"} disabled>
                    primary default disabled
                </Button>
                <Button variant={"primary"} size={"lg"}>
                    default
                </Button>
                <Button variant={"primary"} size={"sm"}>
                    default
                </Button>
                <Button variant={"primary"} size={"default"}>
                    default
                </Button>
            </div>
            <div className="flex gap-10 justify-start items-start flex-col p-6">
                <div className="flex gap-10 justify-start items-center">
                    <Button variant={"secondary"}>secondary</Button>
                    <Button variant={"secondary"} disabled>
                        seconsary
                    </Button>
                    <Button variant={"secondary"} size={"lg"}>
                        secondary lg
                    </Button>
                    <Button variant={"secondary"} size={"sm"}>
                        secondary sm
                    </Button>
                </div>
            </div>
            <div className="flex gap-10 justify-start items-start flex-col p-6">
                <div className="flex gap-10 justify-start items-center">
                    <Button variant={"link"}>link</Button>
                    <Button variant={"link"} disabled>
                        link
                    </Button>
                    <Button variant={"link"} size={"lg"}>
                        link
                    </Button>
                    <Button variant={"link"} size={"sm"}>
                        link
                    </Button>
                    <Button variant={"link"} size={"default"}>
                        link
                    </Button>
                </div>
            </div>
            <div className="flex gap-10 justify-start items-start flex-col p-6">
                <div className="flex gap-10 justify-start items-center">
                    <Button variant={"text"}>text</Button>
                    <Button variant={"text"} disabled>
                        text
                    </Button>
                    <Button variant={"text"} size={"lg"}>
                        text
                    </Button>
                    <Button variant={"text"} size={"sm"}>
                        text
                    </Button>
                    <Button variant={"text"} size={"default"}>
                        text
                    </Button>
                </div>
            </div>
        </div>
    );
}
