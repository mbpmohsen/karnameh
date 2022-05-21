const Modal = (props) => {
    const { children, ...rest } = props;

    return (
        <div {...rest} aria-modal="true" role="dialog" className="bg-black/50 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center flex">
            <div className="relative p-4 w-full max-w-2xl h-full md:h-auto">
                <div className="relative bg-white rounded-lg shadow">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Modal