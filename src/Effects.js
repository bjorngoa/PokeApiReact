export const addBackgroundShadow = (e) => {
  e.target.style.filter =
    "drop-shadow(2px 2px 4px rgb(11, 105, 7)) brightness(1.2)";
  e.target.style.transtion = "all ease-out 300ms";
};

export const removeEffects = (e) => {
  e.target.style = "";
};

export const underline = (e) => {
  e.target.style.textDecoration = "underline";
};
