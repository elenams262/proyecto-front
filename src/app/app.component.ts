import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Necesario para directivas básicas
import { FormsModule } from '@angular/forms'; // Necesario si usas ngModel en el futuro

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Proyecto Halet, Juanma y Elena';

  // Función para manejar el cambio en el select de entrenamiento
  onEntrenamientoChange(event: any) {
    const valor = event.target.value;
    console.log('Entrenamiento seleccionado:', valor);
    // Aquí podrías añadir lógica para mostrar contenido diferente según la selección
    if (valor !== '¿Qué quieres mejorar?') {
      alert(`Has seleccionado entrenar: ${valor}`);
    }
  }
}
