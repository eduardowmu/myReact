import React from "react"

//criação de interface de propriedades deste componente
interface InputLoginProps {
    label: string;
    type: string;
    value: string;

    //criação de eventos, como onChange por exemplo
    onChange: (onChangeValue: string) => void
    /**
     * evento relacionado ao onKeyDown do input
     * a interrogação significa a não obrigatoriedade
     * deste parametro
     */
    onPressEnter?: () => void
}
/**
 * criando um componente funcional do REACT, atribuindo lhe
 * a interface que possui as propriedades
 */
export const InputLogin: React.FC<InputLoginProps> = (props) => {
    return(
        <label>
            <span>{props.label}</span>
            <input 
                type={props.type} 
                value={props.value}
                onChange={e => props.onChange(e.target.value)}
                onKeyDown={e => e.key === 'Enter' ?
                            /**
                             * se props.onPressEnter !== undefined
                             * então consigo executar props.onPressEnter()
                             * é uma lógica do próprio TS
                             */
                            props.onPressEnter && props.onPressEnter() : 
                            undefined}/>
        </label>
    )
}