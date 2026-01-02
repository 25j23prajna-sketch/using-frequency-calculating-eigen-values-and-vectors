# Mechanical Vibrations Using Matrices and Eigenvalues

## 📌 Project Overview
This project is an **interactive educational website** that explains how
**matrices, eigenvalues, and eigenvectors** are used to analyze
**natural vibrations of a mechanical system**.

The system modeled is a **two-mass–spring system**, a fundamental example
used in mechanical engineering, physics, and applied mathematics.

The goal is to **connect abstract linear algebra concepts to real physical motion**
using visualizations and animations.

---

## 🎯 Learning Objectives
After using this website, a learner should be able to:

- Understand how mechanical systems are written in **matrix form**
- See how **eigenvalues represent natural frequencies**
- Understand how **eigenvectors represent mode shapes**
- Visually distinguish **Mode 1 (in-phase)** and **Mode 2 (out-of-phase)** vibrations
- Observe how changing mass and stiffness affects vibration behavior

---

## ⚙️ Physical Model
The system consists of:
- Two masses: \( m_1 \), \( m_2 \)
- Linear springs with stiffness \( k \)
- No damping (free vibration)

The governing equation is:

\[
M \ddot{x} + K x = 0
\]

Where:
- \( M \) = Mass matrix
- \( K \) = Stiffness matrix
- \( x \) = Displacement vector

---

## 🧮 Mathematical Formulation

### Mass Matrix
\[
M =
\begin{bmatrix}
m_1 & 0 \\
0 & m_2
\end{bmatrix}
\]

### Stiffness Matrix
\[
K =
\begin{bmatrix}
2k & -k \\
-k & 2k
\end{bmatrix}
\]

---

## 🔍 Eigenvalue Problem
Assuming harmonic motion:

\[
x(t) = \phi e^{i\omega t}
\]

Substituting into the equation of motion gives:

\[
(K - \omega^2 M)\phi = 0
\]

- **Eigenvalues** \( \omega^2 \) → Natural frequencies
- **Eigenvectors** \( \phi \) → Mode shapes

---

## 📈 Features of the Website

### ✅ Interactive Controls
- Sliders for mass and spring stiffness
- Instant update of frequencies and animations

### ✅ Matrix Display
- Real-time visualization of mass and stiffness matrices

### ✅ Natural Frequency Graph
- Bar graph representation of eigenvalues

### ✅ Mode Shape Animations
- **Mode 1:** In-phase motion of masses
- **Mode 2:** Out-of-phase motion of masses

### ✅ Eigenvector Visualization
- Arrow diagrams showing relative motion of masses
- Simple eigenvectors: `[1, 1]` and `[1, -1]`

---

## 🎥 Interpretation of Results

| Concept | Physical Meaning |
|-------|----------------|
| Eigenvalue | Square of vibration frequency |
| Eigenvector | Relative displacement pattern |
| Mode 1 | Masses move together |
| Mode 2 | Masses move in opposite directions |

---

## 🛠️ Technologies Used
- HTML5
- CSS3
- JavaScript (Canvas API)
- GitHub Pages (for deployment)

No external libraries are used, keeping the logic transparent and educational.

---

## 🚀 How to Run the Project

1. Clone or download this repository
2. Open `index.html` in any modern web browser
3. Adjust sliders to explore system behavior
4. (Optional) Deploy using **GitHub Pages**

---

## 🌐 Live Deployment (Optional)
To publish the website:

1. Upload files to a GitHub repository
2. Go to **Settings → Pages**
3. Select branch `main` and root folder
4. Save and access the generated URL

---

## 📚 Educational Use
This project is suitable for:
- Engineering students
- Linear algebra learners
- Physics demonstrations
- Mini-projects and portfolios

---

## 🧠 Key Takeaway
> **Eigenvalues tell us how fast a system vibrates.  
Eigenvectors tell us how the system vibrates.**

---

## ✨ Future Improvements
- Spring deformation animation
- Energy transfer plots
- Damping effects
- Step-by-step eigenvalue solver

---

## 📜 License
This project is intended for educational use.
You are free to modify and reuse it with attribution.
