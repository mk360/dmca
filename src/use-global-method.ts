import convertString from "./convert-string";

function useGlobalProperty(method: keyof typeof globalThis) {
    return 'globalThis[' + convertString(method) + ']';
};

export default useGlobalProperty;
