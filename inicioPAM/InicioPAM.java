/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 */

package com.mycompany.iniciopam;

/**
 *
 * @author xiime
 */
import javax.swing.*;

public class InicioPAM {

    // Clase con métodos
    static class InfoMateria {
        public String reglamentoPOO() {
            return "Reglamento POO:\n"
                    + "1. Respeto\n"
                    + "2. Participación activa en orden\n"
                    + "3. No entregar trabajos incompletos\n"
                    + "4. No se aplican examen fuera de tiempo\n"
                    + "5. Plagio de trabajos = 0 para todos\n"
                    + "6. 3 faltas = Final del parcial\n"
                    + "7. Calificación máxima en final 8";
        }
        public String lineamientosClassroom() {
            return "Lineamientos de Classroom:\n"
                    + "1. Entregar los trabajos para su revisión\n"
                    + "2. Entregas en PDF\n"
                    + "3. Avisos de clase\n"
                    + "4. Entregas autorizadas con retraso, 5 Calif Max";
        }
        public String fechasParciales() {
            return "Fechas de Parciales:\n"
                    + "1er Parcial: 29-09-25\n"
                    + "2do Parcial: 03-11-25\n"
                    + "3er Parcial: 01-12-25";
        }
        public String porcentajesParcial() {
            return "Porcentajes por Parcial:\n"
                    + "1er Parcial: 40% Conocimiento, 20% Desempeño, 30% Producto, 10% Proyecto\n"
                    + "2do Parcial: 40% Conocimiento, 20% Desempeño, 20% Producto, 20% Proyecto\n"
                    + "3er Parcial: 20% Conocimiento, 10% Desempeño, 40% Producto, 30% Proyecto";
        }
    }

    public static void main(String[] args) {
        InfoMateria materia = new InfoMateria();

        String[] opciones = {"Reglamento POO", "Lineamientos Classroom", "Fechas de Parciales", "Porcentajes por Parcial", "Salir"};
        int seleccion = -1;

        while (seleccion != 4) { 
            seleccion = JOptionPane.showOptionDialog(
                    null,
                    "Selecciona una opción",
                    "Inicio PAM - Materia POO",
                    JOptionPane.DEFAULT_OPTION,
                    JOptionPane.INFORMATION_MESSAGE,
                    null,
                    opciones,
                    opciones[0]
            );
            switch (seleccion) {
                case 0:
                    JOptionPane.showMessageDialog(null, materia.reglamentoPOO());
                    break;
                case 1:
                    JOptionPane.showMessageDialog(null, materia.lineamientosClassroom());
                    break;
                case 2:
                    JOptionPane.showMessageDialog(null, materia.fechasParciales());
                    break;
                case 3:
                    JOptionPane.showMessageDialog(null, materia.porcentajesParcial());
                    break;
                case 4:
                    JOptionPane.showMessageDialog(null, "¡Hasta luego!");
                    break;
                default:
                    seleccion = 4;
                    break;
            }
        }
    }
}
