import cn from "classnames";

const Input = (props) => {
    const { className, children, onChange, error, ...rest } = props;


    const handleOnChange = (e) => {
        if (onChange) {
            onChange(e.target.value)
        }
        return null
    }

    return (
        <label>
            {children}
            <input
                className={cn('', className)}
                onChange={handleOnChange}
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                spellCheck="false"
                {...rest}
            />
            {error ? <div data-testid="input-error" className="text-rose-600 dark:text-rose-500 text-sm mt-2">
                {error}
            </div>: null}
        </label>
    )
}

export default Input