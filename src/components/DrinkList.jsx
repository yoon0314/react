//음료의 목록을 보여줄 li 컴포넌트
export default function DrinkList({name, img, cont}) {
    return (
        <>
            <li>
                <p><img src={img} alt="" /></p>
                <h2>{name}</h2>
                <p>{cont}</p>
            </li>
        </>
    )
}