import React, { useCallback, useState } from 'react'
import Title from './Title';
import Button from './Button';

function Display() {
    const [age, setAge] = useState(22);
    const [salary, setSalary] = useState(50000);

    let handleAge = useCallback(() => {
        setAge(age + 1)
    }, [age])

    let handleSalary = useCallback(() => {
        setSalary(salary + 10000)
    }, [salary]);
    return (
        <>
            <section className='card m-auto mt-5' style={{ maxWidth: "420px" }} >
                <div className="card-body" style={{ textAlign: "center" }}>
                    <h1>Display Components</h1>
                    <hr />
                    <Title title='Age' data={age} />
                    <Button handleIncrement={handleAge}>
                        Age
                    </Button>
                    <br></br>
                    <br></br>
                    <Title title='Salary' data={salary} />
                    <Button handleIncrement={handleSalary}>
                        Salary
                    </Button>
                </div>
            </section>
        </>
    )
}

export default Display