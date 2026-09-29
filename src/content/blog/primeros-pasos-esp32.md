---
title: 'Primeros pasos con el ESP32'
description: 'Mi primer contacto con el ESP32: qué es, cómo alimentarlo y el clásico LED parpadeante.'
pubDate: 2026-09-22
tags: ['electrónica', 'esp32', 'tutorial']
---

Lorem ipsum dolor sit amet, consectetur adipiscing elit. El ESP32 es un microcontrolador con WiFi y Bluetooth incorporados, ideal para proyectos de IoT.

## Lo que necesitás

- Una placa ESP32 DevKit.
- Un cable USB **de datos** (no solo de carga).
- El Arduino IDE con el paquete de placas de Espressif.

## El primer programa

Praesent libero. Sed cursus ante dapibus diam. El "hola mundo" de la electrónica es hacer parpadear un LED:

```cpp
const int LED = 2;

void setup() {
  pinMode(LED, OUTPUT);
}

void loop() {
  digitalWrite(LED, HIGH);
  delay(500);
  digitalWrite(LED, LOW);
  delay(500);
}
```

## Cuidado con los 5 V

Sed nisi. Nulla quis sem at nibh elementum imperdiet. Los pines del ESP32 trabajan a **3,3 V** y no toleran 5 V. Si vas a conectar sensores de 5 V, usá un conversor de nivel.

Duis sagittis ipsum. En el próximo post: cómo alimentarlo con baterías.
