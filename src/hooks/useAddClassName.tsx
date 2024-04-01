export const useToggleClassName = () => {

  const handleAddClassName =({
    classname,
    elementClassname,
  }: {
    classname: string;
    elementClassname: string;
  })=>{

    const htmlElement = document.getElementsByClassName(elementClassname);
    
    if (htmlElement[0]) {
      htmlElement[0].classList.add(classname);
    }
  }
  const  handleRemoveClassName= ({
    classname,
    elementClassname,
  }: {
    classname: string;
    elementClassname: string;
  })=>{
    const htmlElement = document.getElementsByClassName(elementClassname);
  
    if (htmlElement[0]) {
      htmlElement[0].classList.remove(classname);
    }
  };
  return {
    add:handleAddClassName,
    remove:handleRemoveClassName
  }
};
