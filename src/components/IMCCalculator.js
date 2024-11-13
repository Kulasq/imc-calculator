import React, { useState } from 'react';
import './IMCCalculator.css';

function IMCCalculator() {
    const [altura, setAltura] = useState('');
    const [peso, setPeso] = useState('');
    const [imc, setImc] = useState(null);
    const [classificacao, setClassificacao] = useState('');

    const calcularIMC = () => {
        if (altura && peso) {
            const alturaMetros = altura / 100;
            const imcCalculado = (peso / (alturaMetros ** 2)).toFixed(2);
            setImc(imcCalculado);
            setClassificacao(classificarIMC(imcCalculado));
        }
    };

    const classificarIMC = (imc) => {
        if (imc < 18.5) return 'Abaixo do peso';
        if (imc >= 18.5 && imc < 24.9) return 'Peso normal';
        if (imc >= 25 && imc < 29.9) return 'Sobrepeso';
        if (imc >= 30) return 'Obesidade';
        return '';
    };

    return (
        <div className="calculator-container">
            <h1>Calculadora de IMC</h1>
            <div>
                <label>Altura (cm):</label>
                <input
                    type="number"
                    value={altura}
                    onChange={(e) => setAltura(e.target.value)}
                    placeholder="Digite sua altura em cm"
                />
            </div>
            <div>
                <label>Peso (kg):</label>
                <input
                    type="number"
                    value={peso}
                    onChange={(e) => setPeso(e.target.value)}
                    placeholder="Digite seu peso em kg"
                />
            </div>
            <button onClick={calcularIMC}>Calcular IMC</button>

            {imc && (
                <div>
                    <h2>Seu IMC: {imc}</h2>
                    <h3>Classificação: {classificacao}</h3>
                </div>
            )}
        </div>
    );
}

export default IMCCalculator;
