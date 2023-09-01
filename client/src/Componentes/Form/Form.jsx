import React, { useState } from "react";
import style from "../Form/Form.module.css";
import { useDispatch, useSelector } from "react-redux";
import { createActivity } from "../../Redux/Actions";

const Form = () => {
  const dispatch = useDispatch();
  const countriess = useSelector((state) => state.countries);
  const [formData, setFormData] = useState({
    name: "",
    temporada: "",
    dificultad: "",
    duracion: "",
    countries: [],
  });

  const [errors, setErrors] = useState({
    name: "Requerido",
    temporada: "",
    dificultad: "",
    duracion: "",
    countries: "",
  });

  const clickbandera = (event) => {
    const countryToRemove = event.target.getAttribute("data-country");
    const updatedCountries = formData.countries.filter(
      (country) => country !== countryToRemove
    );

    setFormData({
      ...formData,
      countries: updatedCountries,
    });
  };

  const validate = () => {
    let newErrors = {
      name: "",
      temporada: "",
      dificultad: "",
      duracion: "",
      countries: "",
    };

    if (formData.countries.length === 0) {
      newErrors.countries = "Seleccione un pais porfavor";
    }

    if (formData.duracion < 1 || formData.duracion > 24) {
      newErrors.duracion = "La duración debe estar entre 1 y 24 horas";
    }

    if (formData.name === "") {
      newErrors.name = "Debe tener mas de un caracter";
    }

    if (formData.countries.length === 0) {
      newErrors.countries = "Seleccione un país";
    }
    if(formData.name.length > 30){
      newErrors.name = "Menos caracteres"
    }
    setErrors(newErrors);
  };
  const handleChange = (event) => {
    const { name, options } = event.target;

    validate();

    if (name === "countries") {
      const selectedCountryIds = Array.from(options)
        .filter((option) => option.selected)
        .map((option) => option.value);

      const uniqueSelectedCountryIds = selectedCountryIds.filter(
        (id) => !formData.countries.includes(id)
      );

      if (formData.countries.length + uniqueSelectedCountryIds.length > 5) {
        return;
      }

      setFormData({
        ...formData,
        [name]: [...formData.countries, ...uniqueSelectedCountryIds],
      });
    } else {
      const value = event.target.value;
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const cleanForm = () => {
    setFormData({
      name: "",
      temporada: "",
      dificultad: "",
      duracion: 1,
      countries: [],
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    validate();

    if (
      Object.values(errors).every((error) => error === "") &&
      formData.countries.length > 0
    ) {
      try {
        await dispatch(createActivity(formData));
        cleanForm();
        alert("Actividad creada correctamente");
      } catch (error) {
        console.error("Error al crear la actividad:", error);
      }
    }
  };

  console.log(formData);
  return (
    <form onSubmit={handleSubmit} className={style.formulario}>
      <div className={style.form}>
        <label className={style.label}>Name: </label>
        <input
          autoComplete="off"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={style.input}
        />
        <span>{errors.name}</span>

        <label className={style.label}>Dificultad:</label>
        <input
          className={style.dificultad}
          type="range"
          id="DificultadSlider"
          name="dificultad"
          min="1"
          max="5"
          value={formData.dificultad}
          onChange={handleChange}
        />
        <span className={style.dificultadValue}>{formData.dificultad}</span>
        <span>{errors.dificultad}</span>

        <label className={style.label}>Duracion(horas):</label>
        <input
          type="number"
          name="duracion"
          value={formData.duracion}
          onChange={handleChange}
          min="1"
          max="24"
          className={style.input}
        />
        <span>{errors.duracion}</span>

        <label className={style.temporadas}>Temporadas: </label>
        <div className={style.temporada}>
          <div className={style.temporadaItem}>
            <label className={style.labeltemporada} htmlFor="Otoño">
              Otoño
            </label>
            <input
              type="radio"
              id="Otoño"
              name="temporada"
              value="Otoño"
              checked={formData.temporada === "Otoño"}
              onChange={handleChange}
            />
          </div>

          <div className={style.temporadaItem}>
            <label className={style.labeltemporada} htmlFor="Verano">
              Verano
            </label>
            <input
              type="radio"
              id="Verano"
              name="temporada"
              value="Verano"
              checked={formData.temporada === "Verano"}
              onChange={handleChange}
            />
          </div>

          <div className={style.temporadaItem}>
            <label className={style.labeltemporada} htmlFor="Primavera">
              Primavera
            </label>
            <input
              type="radio"
              id="Primavera"
              name="temporada"
              value="Primavera"
              checked={formData.temporada === "Primavera"}
              onChange={handleChange}
            />
          </div>

          <div className={style.temporadaItem}>
            <label className={style.labeltemporada} htmlFor="Invierno">
              Invierno
            </label>
            <input
              type="radio"
              id="Invierno"
              name="temporada"
              value="Invierno"
              checked={formData.temporada === "Invierno"}
              onChange={handleChange}
            />
          </div>
        </div>

        <label className={style.label}>País:</label>
        <div className={style.select}>
          <select
            name="countries"
            value={formData.countries}
            onChange={handleChange}
            multiple
            size={Math.min(6, countriess.length)}
            style={{ maxHeight: "200px" }}
            className={style.customSelect}
          >
            {countriess.map((country) => (
              <option className={style.option} key={country.imagen} value={country.imagen}>
                {country.name}
              </option>
            ))}
          </select>
        </div>
        <p>Paises seleccionados: </p>
        <div className={style.selectedImages}>
          {formData.countries.map((imageSrc, index) => (
            <div key={index} className={style.selectedImageContainer}>
              <img
                src={imageSrc}
                alt={`Country ${index}`}
                className={style.selectedImage}
              />
              <button
                data-country={imageSrc}
                onClick={clickbandera}
                className={style.removeButton}
              >
                x
              </button>
            </div>
          ))}
        </div>{
          formData.countries.length === 0?(
            <span>{errors.countries}</span>
          ): null
        }

        <button className={style.submitBtn} type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;
