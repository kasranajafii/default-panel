// import React, { useRef, useEffect, useContext } from "react";
// import { CSSTransition as ReactCSSTransition } from "react-transition-group";

// const TransitionContext = React.createContext({
//     parent: {},
// });

// function useIsInitialRender() {
//     const isInitialRender = useRef(true);
//     useEffect(() => {
//         isInitialRender.current = false;
//     }, []);
//     return isInitialRender.current;
// }

// type TCSSTransitionRest = {
//     [key: string]: string[] | number[] | boolean[];
// };

// type TCSSTransition = TCSSTransitionRest & {
//     show: boolean;
//     enter?: string;
//     enterStart?: string;
//     enterEnd?: string;
//     leave?: string;
//     leaveStart?: string;
//     leaveEnd?: string;
//     appear?: number | undefined;
//     unmountOnExit?: boolean | undefined;
//     tag?: string;
//     children?: React.ReactElement<
//         any,
//         string | React.JSXElementConstructor<any>
//     >;
// };

// function CSSTransition({
//     show,
//     enter = "",
//     enterStart = "",
//     enterEnd = "",
//     leave = "",
//     leaveStart = "",
//     leaveEnd = "",
//     appear,
//     unmountOnExit,
//     tag = "div",
//     children,
//     ...rest
// }: TCSSTransition) {
//     const enterClasses = enter.split(" ").filter((s) => s.length);
//     const enterStartClasses = enterStart.split(" ").filter((s) => s.length);
//     const enterEndClasses = enterEnd.split(" ").filter((s) => s.length);
//     const leaveClasses = leave.split(" ").filter((s) => s.length);
//     const leaveStartClasses = leaveStart.split(" ").filter((s) => s.length);
//     const leaveEndClasses = leaveEnd.split(" ").filter((s) => s.length);
//     const removeFromDom = unmountOnExit;
//     const nodeRef = React.useRef<React.>();
//     const Component = tag;

//     function addClasses(node : React.Ref<undefined | HTMLElement> | undefined, classes : string[]) : void {
//         classes.length && node?.current.classList.add(...classes);
//     }

//     function removeClasses(node: React.MutableRefObject<T>, classes : string[]) : void {
//         classes.length && node?.current && node.current.classList.remove(...classes);
//     }

//     return (
//         <ReactCSSTransition
//             appear={appear}
//             nodeRef={nodeRef}
//             unmountOnExit={removeFromDom}
//             in={show}
//             addEndListener={(done) => {
//                 nodeRef.current.addEventListener("transitionend", done, false);
//             }}
//             onEnter={() => {
//                 if (!removeFromDom) nodeRef.current.style.display = null;
//                 addClasses(nodeRef, [
//                     ...enterClasses,
//                     ...enterStartClasses,
//                 ]);
//             }}
//             onEntering={() => {
//                 removeClasses(nodeRef, enterStartClasses);
//                 addClasses(nodeRef, enterEndClasses);
//             }}
//             onEntered={() => {
//                 removeClasses(nodeRef, [
//                     ...enterEndClasses,
//                     ...enterClasses,
//                 ]);
//             }}
//             onExit={() => {
//                 addClasses(nodeRef, [
//                     ...leaveClasses,
//                     ...leaveStartClasses,
//                 ]);
//             }}
//             onExiting={() => {
//                 removeClasses(nodeRef, leaveStartClasses);
//                 addClasses(nodeRef, leaveEndClasses);
//             }}
//             onExited={() => {
//                 removeClasses(nodeRef, [
//                     ...leaveEndClasses,
//                     ...leaveClasses,
//                 ]);
//                 if (!removeFromDom) nodeRef.current.style.display = "none";
//             }}
//         >
//             <Component
//                 ref={nodeRef}
//                 {...rest}
//                 style={{ display: !removeFromDom ? "none" : null }}
//             >
//                 {children}
//             </Component>
//         </ReactCSSTransition>
//     );
// }

// function Transition({ show, appear, ...rest }) {
//     const { parent } = useContext(TransitionContext);
//     const isInitialRender = useIsInitialRender();
//     const isChild = show === undefined;

//     if (isChild) {
//         return (
//             <CSSTransition
//                 appear={parent.appear || !parent.isInitialRender}
//                 show={parent.show}
//                 {...rest}
//             />
//         );
//     }

//     return (
//         <TransitionContext.Provider
//             value={{
//                 parent: {
//                     show,
//                     isInitialRender,
//                     appear,
//                 },
//             }}
//         >
//             <CSSTransition appear={appear} show={show} {...rest} />
//         </TransitionContext.Provider>
//     );
// }

// export default Transition;

import React, {
    useRef,
    useEffect,
    useContext,
    ReactNode,
    ElementType,
    CSSProperties,
} from "react";
import { CSSTransition as ReactCSSTransition } from "react-transition-group";

interface TransitionContextProps {
    parent: {
        show?: boolean;
        isInitialRender?: boolean;
        appear?: boolean;
    };
}

const TransitionContext = React.createContext<TransitionContextProps>({
    parent: {},
});

function useIsInitialRender(): boolean {
    const isInitialRender = useRef(true);
    useEffect(() => {
        isInitialRender.current = false;
    }, []);
    return isInitialRender.current;
}

interface CSSTransitionProps {
    show?: boolean;
    enter?: string;
    enterStart?: string;
    enterEnd?: string;
    leave?: string;
    leaveStart?: string;
    leaveEnd?: string;
    appear?: boolean;
    unmountOnExit?: boolean;
    tag?: ElementType;
    children?: ReactNode;
    style?: CSSProperties;
    [rest: string]: any;
}

const CSSTransition: React.FC<CSSTransitionProps> = ({
    show,
    enter = "",
    enterStart = "",
    enterEnd = "",
    leave = "",
    leaveStart = "",
    leaveEnd = "",
    appear,
    unmountOnExit,
    tag: Component = "div",
    children,
    ...rest
}) => {
    const enterClasses = enter.split(" ").filter((s) => s.length);
    const enterStartClasses = enterStart.split(" ").filter((s) => s.length);
    const enterEndClasses = enterEnd.split(" ").filter((s) => s.length);
    const leaveClasses = leave.split(" ").filter((s) => s.length);
    const leaveStartClasses = leaveStart.split(" ").filter((s) => s.length);
    const leaveEndClasses = leaveEnd.split(" ").filter((s) => s.length);
    const removeFromDom = unmountOnExit;

    function addClasses(node: HTMLElement, classes: string[]) {
        classes.length && node.classList.add(...classes);
    }

    function removeClasses(node: HTMLElement, classes: string[]) {
        classes.length && node.classList.remove(...classes);
    }

    const nodeRef = useRef<HTMLElement>(null);

    return (
        <ReactCSSTransition
            appear={appear}
            nodeRef={nodeRef}
            unmountOnExit={removeFromDom}
            in={show}
            addEndListener={(done: () => void) => {
                nodeRef.current?.addEventListener("transitionend", done, false);
            }}
            onEnter={() => {
                if (!removeFromDom) nodeRef.current!.style.display = "";
                addClasses(nodeRef.current!, [
                    ...enterClasses,
                    ...enterStartClasses,
                ]);
            }}
            onEntering={() => {
                removeClasses(nodeRef.current!, enterStartClasses);
                addClasses(nodeRef.current!, enterEndClasses);
            }}
            onEntered={() => {
                removeClasses(nodeRef.current!, [
                    ...enterEndClasses,
                    ...enterClasses,
                ]);
            }}
            onExit={() => {
                addClasses(nodeRef.current!, [
                    ...leaveClasses,
                    ...leaveStartClasses,
                ]);
            }}
            onExiting={() => {
                removeClasses(nodeRef.current!, leaveStartClasses);
                addClasses(nodeRef.current!, leaveEndClasses);
            }}
            onExited={() => {
                removeClasses(nodeRef.current!, [
                    ...leaveEndClasses,
                    ...leaveClasses,
                ]);
                if (!removeFromDom) nodeRef.current!.style.display = "none";
            }}
        >
            <Component
                ref={nodeRef}
                {...rest}
                style={{ display: !removeFromDom ? "none" : undefined }}
            >
                {children}
            </Component>
        </ReactCSSTransition>
    );
};

interface TransitionProps {
    show?: boolean;
    appear?: boolean;
    children: ReactNode;
    [rest: string]: any;
}

const Transition: React.FC<TransitionProps> = ({ show, appear, ...rest }) => {
    const { parent } = useContext(TransitionContext);
    const isInitialRender = useIsInitialRender();
    const isChild = show === undefined;

    if (isChild) {
        return (
            <CSSTransition
                appear={parent.appear || !parent.isInitialRender}
                show={parent.show ?? false} // Ensure show is always a boolean
                {...rest}
            />
        );
    }

    return (
        <TransitionContext.Provider
            value={{
                parent: {
                    show,
                    isInitialRender,
                    appear,
                },
            }}
        >
            <CSSTransition appear={appear} show={show ?? false} {...rest} />{" "}
            {/* Ensure show is always a boolean */}
        </TransitionContext.Provider>
    );
};

export { Transition, CSSTransition };
