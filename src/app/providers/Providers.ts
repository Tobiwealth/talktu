// "use client";
// import React, { ReactNode } from "react";
// import { Provider } from "react-redux";
// import { Store } from "redux";
// import store from '@/store/index'

// interface ProvidersProps {
//   children: ReactNode;
// }

// export default function Providers({ children }: ProvidersProps): JSX.Element {
// 	if (!children || typeof children === "boolean") {
//         throw new Error("Invalid children passed to Providers component.");
//     }
//   return (
//     (<Provider store={store as Store}>{children}</Provider>)
//   );
// }
