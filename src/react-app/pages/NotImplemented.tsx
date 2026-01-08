import { forwardRef, useImperativeHandle, useRef } from "react";

export type NotImplHandle = {
  showNotImplDialog: () => void;
};

const Header = forwardRef<NotImplHandle>((_, ref) => {
  const notImplDialog = useRef<HTMLDialogElement | null>(null);
  const showNotImplDialog = () => {
    if (notImplDialog.current) {
      notImplDialog.current.showModal();
    }
  };
  const hideNotImplDialog = () => {
    if (notImplDialog.current) {
      notImplDialog.current.close();
    }
  };
  useImperativeHandle(ref, () => ({ showNotImplDialog }));


  return (
    <div>
      <dialog ref={notImplDialog} closedby="none">
        <h2>Not Implemented</h2>
        <p>This feature is not yet implemented. Check back later once this section of the website has been completed.</p>
        <button onClick={hideNotImplDialog}>Dismiss</button>
      </dialog>
    </div>
  );
});

export default Header;