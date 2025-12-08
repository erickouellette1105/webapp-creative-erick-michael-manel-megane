# Rapport de Contrôle Qualité

**Nom de l'équipe :** [ Michael, Érick, Manel, Mégane]  
**Nom du projet :** [L'avanture de Stickmant]  
**Type de projet :** [Trace ton chemin]  
**Date :** 8 décembre 2025


## 📋 Table des matières

1. [Informations générales](#1-informations-générales)
2. [PARTIE 1 : Tests externes](#2-partie-1-tests-externes)
3. [PARTIE 2A : Tests internes](#3-partie-2a-tests-internes)
4. [PARTIE 2B : Bogues reçus](#4-partie-2b-bugs-reçus)
5. [PARTIE 2C : Plan de corrections](#5-partie-2c-plan-de-corrections)
6. [Accessibilité](#6-accessibilité)
7. [Performance](#7-performance)
8. [Conclusion](#8-conclusion)
9. [Annexes](#9-annexes)

---

## 1. Informations générales

### Équipe

| Membre | Rôle dans les tests | Heures consacrées |
|--------|---------------------|-------------------|
| [Michael, Érick] | Tests externes  | [6] heures |
| [Manel] | Tests internes + corrections | [X] heures |
| [Manel] | Tests accessibilité + performance | [X] heures |

**Total d'heures de QA :** [X] heures

### Liens importants

- **Projet en ligne :** [[https://erickouellette1105.github.io/webapp-creative-erick-michael-manel-megane/]]
- **GitHub :** [https://erickouellette1105.github.io/webapp-creative-erick-michael-manel-megane/]
- **Trello (bugs) :** [https://trello.com/b/wmsTghPo/projet-web-tracer-votre-chemin]
- **Projet testé (externe) :** [https://fenrir0wulf.github.io/webapp-creative-Benoit-Dana-TingYung-William/]

---

## 2. PARTIE 1 : Tests externes

### Ce que NOUS avons trouvé dans le projet de l'autre équipe

**Projet testé :** [Ox-bezoar temporel]  
**Équipe testée :** [Studio John]  
**Type :** [Trace ton chemin]

### Résumé des tests effectués

**Environnements testés :**

- ✅ Chrome 120 (Desktop/Devtools)
- ✅ Firefox 121 (Desktop/Devtools)
- ✅ Edge (Desktop/Devtools)
- ✅ Mobile 375px (Desktop/DevTools)
- ✅ Tablette 768px (Desktop/DevTools)
- ⚠️ Safari (Devtools)
- ✅ Brave (Devtools)

**Tests complétés :**

- ✅ Tests fonctionnels (checklist complète)
- ✅ Tests responsive (3 tailles)
- ✅ Tests multi-navigateurs (Chrome, Firefox)
- ✅ Tests d'accessibilité
- ✅ Tests de cas limites

### Statistiques des bugs trouvés

| Priorité | Nombre | % |
|----------|--------|---|
| 🔴 Critiques | [X] | [X]% |
| 🟠 Majeurs | [4] | [57,14]% |
| 🟡 Mineurs | [3] | [42,86]% |
| **TOTAL** | **[7]** | **100%** |

### Liste des bugs trouvés (résumé)

**Tous les détails sont dans notre board Trello :** [[https://trello.com/b/9Pcw7dFa/projet-app-web-creative]]

#### 🔴 Bogues Critiques



#### 🟠 Bogues Majeurs

1. **Bogue #1 : [F5 brise la page]**]

   - **Description :** [La touche f5 fait un erreur 404]
   - **Impact :** [Cela est critique car la page peut être perdu et il faut réécrire l'url du site pour y accéder après]
   - **Statut chez eux :** [À faire]
   - **Carte Trello :** [https://trello.com/c/7ai5FmEl]

2. **Bogue #2 : [Le chapitre 16**]

   - **Description :** [Le chapitre 16 est placé avant chaque fin]
   - **Impact :** [Son placement mène à la confusion, à ce point il faudrait juste aller à la fin]
   - **Statut chez eux :** [À faire]
   - **Carte Trello :** [https://trello.com/c/fnCYuDr4]
     
3. **Bogue #3 : [La condition d'accès pour la bonne fin]

   - **Description :** [Condition d'accès pour la bonne fin]
   - **Impact :** [L'histoire peux te donner une fin différente même si les mêmes choix sont fait ce qui est bizarre]
   - **Statut chez eux :** [À faire]
   - **Carte Trello :** [https://trello.com/c/tR7igQX8]

4. **Bogue #4 : [La touche Enter/space ne marche pas]

   - **Description :** [Enter/space ne marche pas au retour à l'accueil]
   - **Impact :** [Ce bug rend la navigation au menu impossible pour les utilisateurs non-voyants]
   - **Statut chez eux :** [À faire]
   - **Carte Trello :** [https://trello.com/c/jK4Yd02N]
     
#### 🟡 Bogues Mineurs

5-12. [Liste brève, détails complets dans Trello]

5. **Bogue #5 : [Bouton save dans mobile est non accessible]

   - **Description :** [Bouton save est caché par l'interface et on ne peut pas scroller pour interagir avec.]
   - **Impact :** [Le bouton save n'est pas accessible]
   - **Statut chez eux :** [À faire]
   - **Carte Trello :** [https://trello.com/c/yRQ9x2OI]

6. **Bogue #6 : [Les images load lentement]

   - **Description :** [Les images prennent beaucoup de temps sur certain navigateurs à charger]
   - **Impact :** [Ralentit le rhytme du projet]
   - **Statut chez eux :** [À faire]
   - **Carte Trello :** [https://trello.com/c/LAY0MQdv]

7. **Bogue #7 : [Pauvre ortographe au chapitre 15]

   - **Description :** [Répétition et manque de mots]
   - **Impact :** [Texte semble moins professionnel]
   - **Statut chez eux :** [À faire]
   - **Carte Trello :** [https://trello.com/c/BV4d3DEZ]

### Impression générale du projet testé

**Points forts observés :**

1. [Style visuel charmant]
2. [Histoire unique et diverse]
3. [Bonne performance malgré quelques problèmes]

**Axes d'amélioration identifiés :**

1. [Ortographe et logique de l'histoire pourrait être meilleur]
2. [Inventaire devrait être intégré]
3. [Responsive à améliorer]

**Évaluation globale (1-5 étoiles) :**

- Facilité d'utilisation : ⭐⭐⭐⭐☆
- Stabilité : ⭐⭐⭐⭐☆
- Design : ⭐⭐⭐⭐⭐
- Performance : ⭐⭐⭐⭐☆

---

## 3. PARTIE 2A : Tests internes

### Ce que NOUS avons testé dans NOTRE projet

### Résumé des tests effectués

**Checklist complète (à ajuster en fonction de votre projet) :**

- [✅] Navigation entre toutes les salles/chapitres
- [✅] Ajout de mémoire / Lecture des chapitres
- [✅] Édition de mémoire / Système de choix
- [✅] Suppression de mémoire / Branches narratives
- [✅] Upload d'images / Tracking des conséquences
- [✅] Tags et filtres / Toutes les fins
- [✅] Recherche / Historique des décisions
- [✅] Responsive (mobile, tablette, desktop)
- [✅] Multi-navigateurs (Chrome, Firefox)
- [☐] Navigation au clavier
- [✅] Contraste des couleurs
- [✅] Alt text sur images
- [✅] Cas limites (formulaires vides, texte long, etc.)

**Taux de réussite :** [12]/[13] tests passés = [92]%

### Environnements testés

RAS = Rien À Signaler

| Environnement | Testé | Résultat | Notes |
|---------------|-------|----------|-------|
| Chrome Desktop | ✅ | ✅ Fonctionne | Quelques bugs mineurs |
| Firefox Desktop | ✅ | ✅ Fonctionne | RAS |
| Edge Desktop | ✅ | ✅ | RAS|
| Mobile 375px | ✅ | ⚠️ Bogues trouvés | [les images se mettent sur le text] |
| Tablette 768px | ✅ | ⚠️ Bogues trouvés | [les images se mettent sur le text] |
| Desktop 1920px | ✅ | ⚠️ Bogues trouvés | [les images se mettent sur le text] |

### Bogues trouvés dans notre propre projet

**En plus des bugs reçus de l'autre équipe, nous avons trouvé :**

| Bogue # | Titre | Priorité | Statut | Assigné à |
|-------|-------|----------|--------|-----------|
| [1] | [l'icon] | 🔴 | Corrigé ✅ | [Nom] |
| [X] | [Titre] | 🟠 | En cours 🔄 | [Nom] |
| [X] | [Titre] | 🟡 | À faire ⏸️ | [Nom] |

**Total bugs trouvés en interne :** [X]

---

## 4. PARTIE 2B : Bogues reçus

### Ce que l'AUTRE équipe a trouvé dans NOTRE projet

**Équipe qui nous a testés :** [Nom de l'équipe]  
**Date de réception :** 6 décembre 2024

### Statistiques

| Priorité | Bogues reçus | Corrigés | En cours | Pas encore faits |
|----------|------------|----------|----------|------------------|
| 🔴 Critiques | [X] | [X] ✅ | [X] 🔄 | [X] ⏸️ |
| 🟠 Majeurs | [X] | [X] ✅ | [X] 🔄 | [X] ⏸️ |
| 🟡 Mineurs | [X] | [X] ✅ | [X] 🔄 | [X] ⏸️ |
| **TOTAL** | **[X]** | **[X]** | **[X]** | **[X]** |

### Liste détaillée des bugs reçus

#### 🔴 Bogues Critiques reçus


#### 🟠 Bogues Majeurs reçus

**Bogue #1 : [404 au refresh de la page]**

- **Description :** [Quand le jeu est commencé (page chapitre) et que le joueur refresh il trouve une page d’erreur]
- **Étapes pour reproduire :** [Aller à une page chapitre. Refresh la page]
- **Notre analyse :** [Nous devons fixer ce problème au cas où l'utilisateur auarit ce bug]
- **Statut actuel (8 décembre) :** ✅ Corrigé / 🔄 En cours / ⏸️ Pas encore fait
- **Plan de correction :** [Le 8 décembre, nous allons chercher en ligne pour savoir comment régler ce bug.]
- **Assigné à :** [L'équipe entière]
- **Date de correction :** [Date si corrigé]

#### 🟡 Bogues Mineurs reçus

**Bogues #4-12 :** [Liste brève]
**Bogue #2 : [Fin ne fonctionne pas]**

- **Description :** [Une fin n’apparait pas même quand le joueur prend le choix “utiliser le sort mystérieux“ à chapitre 5C]
- **Étapes pour reproduire :** [Aller à chapitre 5C. Prendre le choix “utiliser le sort mystérieux“ 2 fois. Une fin ne s’exécute pas]
- **Notre analyse :** [Ceci était intentionel car le sort mystérieux]
- **Statut actuel (8 décembre) :** ✅ Corrigé / 🔄 En cours / ⏸️ Pas encore fait
- **Plan de correction :** [Le 8 décembre, nous allons chercher en ligne pour savoir comment régler ce bug.]
- **Assigné à :** [L'équipe entière]
- **Date de correction :** [Date si corrigé]

### Notre réaction aux bugs reçus

**Bogues que nous confirmons :**

- X bugs confirmés comme vrais bugs

**Bogues que nous contestons (avec justification) :**

- [Bogue #X] : Nous pensons que ce n'est pas un bug parce que [raison]
- [A été discuté avec l'enseignant : décision finale = ...]

**Nouveaux bugs découverts grâce à leurs tests :**

- X bugs qu'on n'aurait jamais trouvés nous-mêmes
- Merci à l'équipe testeuse pour leur regard externe !

---

## 5. PARTIE 2C : Plan de corrections

### État au 8 décembre (aujourd'hui)

**Résumé de nos corrections :**

| Statut | Nombre | % du total |
|--------|--------|------------|
| ✅ Corrigés et validés | [X] | [X]% |
| 🔄 En cours (sera fait d'ici le 10) | [X] | [X]% |
| ⏸️ Reportés (si temps) | [X] | [X]% |
| ❌ Non corrigés (justifiés) | [X] | [X]% |

### Priorités de correction (8→10 décembre)

#### ✅ Déjà corrigés (avant le 8)

**Bogues critiques corrigés :**

1. **Bogue #1 : [Titre]**
   - Corrigé par : [Nom]
   - Date : [Date]
   - Solution : [Brève description de comment c'était corrigé]
   - Re-testé : ✅ Confirmé OK

#### 🔄 En cours (sera fait d'ici le 10)

**Bogues critiques en cours :**

1. **Bogue #X : [Titre]**
   - Assigné à : [Nom]
   - Temps estimé : [X] heures
   - Sera fait : [9 décembre]
   - Statut actuel : [50% fait / bloqué sur X / presque fini]

**Bogues majeurs en cours :**

2. **Bogue #Y : [Titre]**
   - [Même format]

#### ⏸️ Reportés (ferons si temps après les critiques/majeurs)

**Bogues mineurs à faire si temps :**

1. Bogue #Z : [Titre] - Temps estimé : [X]h
2. Bogue #W : [Titre] - Temps estimé : [X]h

#### ❌ Non corrigés (avec justification)

**Bogue #Q : [Titre]**

- **Pourquoi pas corrigé :** [Raison valable]
  - Exemple : "Nécessiterait une refonte majeure de l'architecture (20h de travail)"
  - Exemple : "Après discussion, ce n'est pas un bug mais une limitation de la techno utilisée"
- **Impact :** [Faible / Utilisateur peut contourner le problème en...]

### Plan de travail (8-10 décembre)

**Lundi 8 (soir) :**

- [ ] Finir Bogue #1 (Carl - 2h)
- [ ] Commencer Bogue #5 (Alex - 3h)

**Mardi 9 :**

- [ ] Finir Bogue #5 (Alex - 2h)
- [ ] Corriger Bogue #7 (Jordan - 4h)
- [ ] Tests sur bugs corrigés (Équipe - 1h)

**Mercredi 10 (matin avant remise) :**

- [ ] Finir Bogue #7 si pas fini
- [ ] Corrections mineures urgentes
- [ ] Tests finaux
- [ ] Mise à jour documentation

---

## 6. Accessibilité

### Tests effectués

#### Navigation au clavier

| Test | Résultat | Action |
|------|----------|--------|
| Tab fonctionne sur tous les éléments | ✅ / ⚠️ / ❌ | [Si problème : plan de correction] |
| Focus visible | ✅ / ⚠️ / ❌ | |
| Enter/Space activent les boutons | ✅ / ⚠️ / ❌ | |
| Skip links présents (optionnel) | ✅ / ⚠️ / ❌ | |

**Problèmes trouvés :** [X]  
**Corrigés :** [X]  
**En cours :** [X]

#### Contraste des couleurs

**Tests effectués avec WebAIM Contrast Checker :**

RAS = Rien À Signaler

| Élément | Couleurs | Ratio | Conforme WCAG AA | Action |
|---------|----------|-------|------------------|--------|
| Texte principal | #333 sur #FFF | 12.6:1 | ✅ Excellent | RAS |
| Boutons | #FFF sur #007BFF | 4.5:1 | ✅ Conforme | RAS |
| Liens | #0066CC sur #FFF | 7.5:1 | ✅ Excellent | RAS |
| Texte secondaire | #888 sur #FFF | 3.5:1 | ❌ Trop faible | À corriger |

**Problèmes de contraste :** [X]  
**Plan de correction :** [Détails]

#### Images et médias

| Test | Résultat | Notes |
|------|----------|-------|
| Toutes les images ont un alt | ✅ [X]/[Y] | [X] images sans alt à corriger |
| Alt descriptifs (pas "image1.jpg") | ✅ / ⚠️ | [Détails si problèmes] |
| Images décoratives avec alt="" | ✅ / ⚠️ | [Détails] |

### Score global d'accessibilité

**Résumé :**

- Navigation clavier : [X]/[Y] tests passés
- Contraste : [X]/[Y] éléments conformes
- Images : [X]/[Y] avec alt approprié

**Score estimé : [X]/100**

---

## 7. Performance

### Tests Lighthouse

**Configuration :**

- Mode : Desktop ET Mobile
- Options : Performance, Accessibility, Best Practices

#### Résultats Desktop

| Page | Performance | Accessibility | Best Practices | Notes |
|------|-------------|---------------|----------------|-------|
| Accueil | [X]/100 | [X]/100 | [X]/100 | [Commentaires] |
| [Page principale] | [X]/100 | [X]/100 | [X]/100 | [Commentaires] |

#### Résultats Mobile

| Page | Performance | Accessibility | Best Practices | Notes |
|------|-------------|---------------|----------------|-------|
| Accueil | [X]/100 | [X]/100 | [X]/100 | [Commentaires] |
| [Page principale] | [X]/100 | [X]/100 | [X]/100 | [Commentaires] |

**Screenshots Lighthouse :** Voir annexes

### Optimisations effectuées

#### Compression des images

| Avant | Après | Économie |
|-------|-------|----------|
| [X] MB total | [X] MB total | [X]% économisés |
| [X] images | [X] images compressées | Outil : TinyPNG |

**Exemples :**

- `image1.jpg` : 5.2 MB → 1.8 MB (65% économie)
- `background.png` : 3.1 MB → 800 KB (74% économie)

#### Autres optimisations

- ✅ Ajout de `loading="lazy"` sur [X] images
- ✅ Minification du code (build production)
- ✅ Suppression de console.log()
- ⏸️ À faire : [Si applicable]

### Temps de chargement

**Tests manuels (connexion normale) :**

- Page d'accueil : [X] secondes
- Page principale : [X] secondes
- Page la plus lourde : [X] secondes

**Objectif :** < 3 secondes  
**Atteint :** ✅ Oui / ⚠️ Partiellement / ❌ Non

---

## 8. Conclusion

### État global du projet au 8 décembre

**Le projet est-il prêt pour la remise finale ?**
✅ Oui, fonctionnel / ⚠️ Presque, corrections en cours / ❌ Non, bugs critiques restants

**Résumé de la qualité :**

| Aspect | État | Commentaire |
|--------|------|-------------|
| **Fonctionnalités principales** | ✅ / ⚠️ / ❌ | [Commentaire] |
| **Bogues critiques** | ✅ Tous corrigés / ⚠️ En cours / ❌ Restants | [Détails] |
| **Bogues majeurs** | ✅ / ⚠️ / ❌ | [X]/[Y] corrigés |
| **Accessibilité** | ✅ / ⚠️ / ❌ | Score : [X]/100 |
| **Performance** | ✅ / ⚠️ / ❌ | Lighthouse : [X]/100 |
| **Responsive** | ✅ / ⚠️ / ❌ | [Commentaire] |

### Bilan des tests

**Statistiques globales :**

- **Bogues trouvés (tous) :** [X] (internes + reçus)
- **Bogues corrigés :** [X] ([X]%)
- **Bogues en cours :** [X] (seront corrigés d'ici le 10)
- **Bogues mineurs reportés :** [X]

**Temps total consacré au QA :** [X] heures

### Ce qui fonctionne bien ✅

1. [Ex: Toutes les fonctionnalités principales sont stables]
2. [Ex: Design responsive sur tous les appareils]
3. [Ex: Performance excellente après optimisation]

### Défis rencontrés et solutions 🔧

1. **Défi :** [Ex: Bogues difficiles à reproduire]
   - **Solution :** [Ex: Tests systématiques avec documentation précise]

2. **Défi :** [Ex: Manque de temps pour tout corriger]
   - **Solution :** [Ex: Priorisation rigoureuse : critiques d'abord]

### Apprentissages 📚

**Ce que nous avons appris durant le processus QA :**

1. [Ex: L'importance de tester sur vrais appareils, pas juste DevTools]
2. [Ex: Un regard externe trouve des bugs qu'on ne voit plus]
3. [Ex: Documenter clairement les bugs fait gagner du temps]

### Confiance pour la remise finale 🎯

**Sur une échelle de 1 à 10, notre confiance est : [X]/10**

**Justification :**
[2-3 phrases expliquant pourquoi vous êtes confiant ou quelles sont vos inquiétudes restantes]

---

## 9. Annexes

### Annexe A : Checklist complète des tests

[Inclure la grille de test complétée]

### Annexe B : Screenshots Lighthouse

[Captures d'écran des rapports Lighthouse pour pages principales]

### Annexe C : Screenshots de bugs

[Captures d'écran des bugs majeurs/critiques]

### Annexe D : Lien vers Trello

**Board Trello avec tous les bugs :** [URL]

**Organisation du board :**

- Colonne "Bogues trouvés" : [X] cartes
- Colonne "En correction" : [X] cartes
- Colonne "À valider" : [X] cartes
- Colonne "Corrigé" : [X] cartes

### Annexe E : Métriques additionnelles

**Commits Git durant la phase QA :**

- [Date] : [X] commits (corrections bugs)
- [Date] : [X] commits
- Total : [X] commits de corrections

---

## ✅ Signatures

**Ce rapport a été rédigé et validé par :**

- [Nom 1] - [Rôle] - Date : [Date]
- [Nom 2] - [Rôle] - Date : [Date]
- [Nom 3] - [Rôle] - Date : [Date]

**Nous confirmons que ce rapport reflète fidèlement l'état de notre projet et de notre processus QA.**

---
