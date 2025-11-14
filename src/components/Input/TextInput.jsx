const TextInput = ({
  isDarkMode,
  value,
  handleInputChange,
  textarea,
  label,
  id,
  name,
  required = false,
  error = null,
  onBlur,
}) => {
  const InputComponent = textarea ? "textarea" : "input";
  const inputId = id || name || label.toLowerCase().replace(/\s+/g, '-');
  const errorId = `${inputId}-error`;
  const hasError = error && error.trim().length > 0;

  return (
    <div className="relative">
      <InputComponent
        id={inputId}
        name={name || inputId}
        type={textarea ? undefined : "text"}
        className={`w-full px-4 pt-6 pb-2 border rounded-xl transition-all duration-300 outline-none resize-none ${
          hasError
            ? isDarkMode
              ? "border-red-500 focus:border-red-400 bg-red-900/10"
              : "border-red-500 focus:border-red-400 bg-red-50"
            : isDarkMode
            ? "bg-gray-800/50 border-gray-700 text-white focus:border-blue-500 focus:bg-gray-800/70"
            : "bg-white/80 border-gray-300 text-gray-900 focus:border-blue-500 focus:bg-white"
        }`}
        value={value}
        onChange={({ target }) => handleInputChange(target.value)}
        onBlur={onBlur}
        aria-invalid={hasError}
        aria-describedby={hasError ? errorId : undefined}
        aria-required={required}
        required={required}
      />
      <label
        htmlFor={inputId}
        className={`text-sm absolute left-4 top-2 pointer-events-none origin-left ${
          hasError
            ? "text-red-500"
            : isDarkMode
            ? "text-gray-400"
            : "text-gray-600"
        }`}
      >
        {label}
        {required && <span className="text-red-500 ml-1" aria-label="required">*</span>}
      </label>
      {hasError && (
        <div
          id={errorId}
          className="text-red-500 text-sm mt-1 flex items-center"
          role="alert"
        >
          <span className="mr-1">⚠</span>
          {error}
        </div>
      )}
    </div>
  );
};

export default TextInput;
