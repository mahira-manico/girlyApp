# 🌸 Girly App - Dashboard Personnel & Safe Space (Y2K Aesthetic)

Bienvenue sur **Girly**, une application web front-end pensée comme un espace safe et interactif dédié à l'organisation, au bien-être, et à la culture lifestyle rétro. Ce projet a été réalisé et validé dans le cadre de la certification RNCP 37273 (Bloc 2) à La Plateforme.

## 🚀 Liens du Projet
- **Site de Production en Ligne :** [Netlify](https://girlyappon.netlify.app/)
- **Dépôt du Code Source :** [Github](https://l-adresse-de-ton-site.com)

---

## 📊 Audits & Performances (Lighthouse)

Le site a été audité via l'outil Google Lighthouse en simulant une connexion mobile et desktop, garantissant une qualité de code optimale et une démarche éco-responsable.

### 💻 Résultats Desktop
- **Performance :** 98% ⚡
- **Accessibilité :** 89% ♿
- **Bonnes Pratiques :** 100% 👑
- **SEO :** 91% 🔍

### 📱 Résultats Mobile
- **Performance :** 77% (Impacté par le rendu asynchrone des animations CSS et des médias complexes)
- **Accessibilité :** 92% ♿

---

## 🌿 Démarche d'Éco-conception & Accessibilité (W3C)

Conformément au référentiel d'évaluation du Bloc 2, une attention stricte a été portée sur l'empreinte énergétique du site :

1. **Optimisation des Médias :** Conversion de l'ensemble des images locales au format moderne et compressé `.webp`. Remplacement du logo animé au format lourd `.gif` par un format vidéo `.webm` de seulement quelques Ko avec attributs `autoplay loop muted playsinline`.
2. **Performance Mobile (Fallback) :** Sur mobile, la vidéo d'introduction énergivore est désactivée au profit d'une image fixe légère pour préserver la batterie et le processeur de l'utilisateur.
3. **Architecture CSS Éco-conçue :** Utilisation du préprocesseur **Sass** pour structurer, modulariser et minifier le rendu final, évitant l'importation de frameworks tiers lourds (comme Bootstrap).
4. **Accessibilité (RGAA / W3C) :**
   - Intégration systématique des attributs `aria-hidden="true"` sur les icônes purement décoratives (FontAwesome).
   - Utilisation d'attributs `aria-label` clairs sur les éléments interactifs (`<a>`, `<button>`).
   - Utilisation de la balise native HTML5 `<dialog>` pour les popups, évitant l'injection de scripts JS superflus.

---

## 🛠️ Fonctionnalités Clés & Intégration Technique

- **Structure Sémantique & Responsive :** Intégration moderne via Flexbox et Grid Layout en respectant une philosophie *Mobile-First*.
- **Task Board & Mood Board Interactif :** Manipulation dynamique du DOM en JavaScript Vanilla (sélection, écouteurs d'événements, timers).
- **Communication Asynchrone :** Connexion et requêtes HTTP asynchrones via l'API `Fetch` avec une API externe (*FakeStoreAPI*) pour la génération dynamique de suggestions de produits.

---

## 📅 Rétro-Planning de Réalisation (3 Semaines)
- **Semaine 1 :** Analyse conceptuelle, découpage sémantique, création des wireframes structurels et identité graphique Y2K.
- **Semaine 2 :** Intégration HTML5 sémantique et développement de l'architecture CSS modulaire avec Sass.
- **Semaine 3 :** Dynamisation du DOM en JavaScript, intégration de l'API externe, audits Lighthouse et déploiement continu sur **Netlify**.

---

## 👩‍💻 Développeuse
- **Nom :** Mahira Manico
- **Fait avec :** 🤍 pour la communauté.