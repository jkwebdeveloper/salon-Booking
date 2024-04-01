import dynamic from "next/dynamic";

//Global components
const PageLoader = dynamic(() => import("@/components/ui/pageloader"));
const loader = <PageLoader show={true} width='35' height='35' text="Request" />;

const ServiceSVG = dynamic(() => import("@/constants/svg/service"), { loading: () => loader });


export { ServiceSVG };