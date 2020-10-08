import React, {useRef} from 'react';

interface TodoFormProps {
    onAdd(title: string): void
}

export const ToDoForm: React.FC<TodoFormProps> = props => {

    const ref = useRef<HTMLInputElement>(null);

    const keyPressHandler = (event: React.KeyboardEvent) => {
        if(event.key === 'Enter'){
            props.onAdd(ref.current!.value);
            ref.current!.value = ''
        }
    }

    return (
        <div className="input-field mt2">
            <input
                ref={ref}
                type="text"
                id="title"
                placeholder="Новое дело"
                onKeyPress={keyPressHandler}
            />
            <label htmlFor="title" className="active">
                Введите дело
            </label>
        </div>
    )
}