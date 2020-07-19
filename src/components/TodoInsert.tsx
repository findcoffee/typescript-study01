import React, { useState, FormEvent } from 'react';

type TodoInsertProps = {
    onInsert: (text: string) => void;
}

function TodoInsert({ onInsert }: TodoInsertProps ) {
    const [value, setValue] = useState('');
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
        onInsert(value);
        setValue('');
    }

    return (
        <form onSubmit={onSubmit}>
            <input placeholder="insert text" value={value} onChange={onChange} />
            <button type="submit">Regist</button>
        </form>
    );
}

export default TodoInsert;
