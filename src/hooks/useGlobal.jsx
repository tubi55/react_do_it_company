import { createContext, useContext, useReducer } from "react";

//열고 닫음 상태와 액션 타입 정의
const initialState = { IsOpen: false };
const OPEN = "OPEN";
const CLOSE = "CLOSE";
const TOGGLE = "TOGGLE";

const openReducer = (state, action) => {
	switch (action.type) {
		case OPEN:
			return { ...state, IsOpen: true };
		case CLOSE:
			return { ...state, IsOpen: false };
		case TOGGLE: {
			return { ...state, IsOpen: !state.IsOpen };
		}
		default:
			return state;
	}
};

// context 생성
export const GlobalContext = createContext();

// context 제공 컴포넌트
export function GlobalProvider({ children }) {
	const [state, dispatch] = useReducer(openReducer, initialState);

	return <GlobalContext.Provider value={{ state, dispatch }}>{children}</GlobalContext.Provider>;
}

export function useGlobalState() {
	const globalContext = useContext(GlobalContext);
	if (!globalContext) {
		throw new Error("useGlobalState must be used within a GlobalProvider");
	}
	return globalContext;
}

//useReducer를 추가하여 전역 state를 action타입에 따라 보다 구조적으로 변경 강제하여 함부로 전역state가 변경되는 불상사를 방지
