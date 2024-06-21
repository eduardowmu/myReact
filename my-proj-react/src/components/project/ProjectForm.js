function ProjectForm() {
    return(
        <form>
            <div>
                <input type="text" placeholder="Insira um nome 
                    para o novo projeto"/>
            </div>
            <div>
                <input type="number" placeholder="Insira o 
                    orçamento total"/>
            </div>
            <div>
                <select name="category_id">
                    <option disabled>Selecione a categoria</option>
                    <option>Selecione a categoria</option>
                </select>
            </div>
            <div>
                <input type="submit" value="Create new project"/>
            </div>
        </form>
    )
}

export default ProjectForm