import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-reproductor',
  templateUrl: './reproductor.component.html',
  styleUrls: ['./reproductor.component.css']
})
export class ReproductorComponent {
  circlePosition = 0; // Posición inicial del círculo
  currentVolume = 0; // Volumen actual (0-100)
  isDragging = false; // Estado de arrastre

  // Ancho de la barra de volumen
  barWidth = 100;

  // Inicia el arrastre
  startDrag(event: MouseEvent) {
    this.isDragging = true;
    this.updateCirclePosition(event);
  }

  // Detiene el arrastre
  @HostListener('document:mouseup', ['$event'])
  stopDrag(event: MouseEvent) {
    this.isDragging = false;
  }

  // Actualiza la posición del círculo mientras se arrastra
  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (this.isDragging) {
      this.updateCirclePosition(event);
    }
  }

  // Calcula la posición del círculo y el volumen actual
  updateCirclePosition(event: MouseEvent) {
    const bar = document.querySelector(
      '.reproductor_control_sound-barra'
    ) as HTMLElement;
    const barRect = bar.getBoundingClientRect();

    // Calcula la nueva posición del círculo
    let newPosition = event.clientX - barRect.left;

    // Limita la posición dentro de la barra
    newPosition = Math.max(0, Math.min(newPosition, this.barWidth));

    // Actualiza la posición del círculo
    this.circlePosition = newPosition;

    // Calcula el volumen actual (0-100)
    this.currentVolume = Math.round((newPosition / this.barWidth) * 100);
  }
}
