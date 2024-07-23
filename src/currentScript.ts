declare global {
  function getCurrentScript(): HTMLScriptElement | null;
}

(function () {
  let currentScript: HTMLScriptElement | null = null;

  function setCurrentScript(script: HTMLScriptElement) {
    currentScript = script;
  }

  const scripts = document.getElementsByTagName("script");

  for (let i = 0; i < scripts.length; i++) {
    const script = scripts[i];
    if (script) {
      script.addEventListener(
        "load",
        function () {
          setCurrentScript(script);
        },
        true
      );
    }
  }

  window.getCurrentScript = function (): HTMLScriptElement | null {
    return currentScript;
  };
})();
