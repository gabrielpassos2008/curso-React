function FormLogin() {
    return (
        <div>
            <form>
                <h2>Faça seu login:</h2>
                <label>Email:</label>
                <input type="text" name="email"></input>

                <label>Senha:</label>
                <input type="text" name="senha"></input>

                <button type="submit">Logar</button>
            </form>
        </div>
    );
}

export default FormLogin