 // reducer function
export const reducer = (state, action) => {
  if (action.type === "ADD_ITEMS") {
    const newPeople = [...state.people, action.payload];
    return {
      ...state,
      people: newPeople,
      isModalOpen: true,
      modalContent: "something added",
    };
  }
  if (action.type === "NO_VALUE") {
    return {
      ...state,
      isModalOpen: true,
      modalContent: "please enter a value",
    };
  }
  if (action.type === "CLEAR_MODAL") {
    return {
      ...state,
      isModalOpen: false,
    };
  }
  if (action.type === "CLEAR_ITEM") {
    const newPerson = state.people.filter(
      (person) => person.id !== action.payload
    );
    return { ...state, people: newPerson };
  }
  throw new Error("something sometthing");
};