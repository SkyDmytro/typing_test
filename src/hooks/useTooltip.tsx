export const useTooltip = () => {
  const showTooltip = (tooltipClassName: string) => {
    const elements = document.getElementsByClassName(tooltipClassName);
    if (elements.length > 0) {
      const element = elements[0] as HTMLElement;
      element.style.visibility = "visible";
    } else {
      console.log("Element not found");
    }
  };

  const hideTooltip = (tooltipClassName: string) => {
    const elements = document.getElementsByClassName(tooltipClassName);
    if (elements.length > 0) {
      const element = elements[0] as HTMLElement;
      element.style.visibility = "hidden";
    } else {
      console.log("Element not found");
    }
  };

  return { showTooltip, hideTooltip };
};
