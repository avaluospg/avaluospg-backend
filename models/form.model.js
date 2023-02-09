module.exports = mongoose => {
    const Form = mongoose.model(
        "form",
        mongoose.Schema(
            {
                nroAv: String,
                FechaDeTasacion: String, 
                InstruidoPor: String,
                Solicitante: String,
                Propietarios: String,
                GradComerciable: String,
                EstadoInmueble: String,
                TipoDeCambio: String,
                Departamento: String,
                published: Boolean
            },
            { timestamps: true }
        )
    );

    return Form;
};