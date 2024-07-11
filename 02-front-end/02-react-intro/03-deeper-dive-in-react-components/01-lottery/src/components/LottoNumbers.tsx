function LottoNumbers({ numbers }: { numbers: number[] }) {
    return(
        <>
            <h3>Os números sorteados são:</h3>
            { numbers.length === 6 ?
                <ul>
                    { numbers.map((number) => <li>{ number }</li>) }
                </ul>
                : <h3>Erro: a lista não contém 6 números</h3>
            }
        </>
    );
}

export default LottoNumbers;