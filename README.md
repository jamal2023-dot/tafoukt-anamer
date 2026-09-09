# Association Tafoukt — Anamer

Site officiel bilingue (français / العربية) de l’Association Tafoukt pour le Sport et l’Art – Anamer.

## Stack

- Next.js 16, App Router et TypeScript
- React 19
- Tailwind CSS 4
- Lucide Icons
- Données éditoriales locales et typées
- Déploiement Node.js ou Docker, prêt pour Gheima

## Démarrage

Prérequis : Node.js 22.13 ou plus récent.

```bash
npm install
npm run dev
```

Ouvrir `http://localhost:3000`. La racine redirige vers la version française. La version arabe est disponible sous `/ar`.

## Vérification production

```bash
npm run lint
npm run build
npm start
```

## Organisation

```text
app/          routes, metadata, sitemap et robots
components/   interface, pages et formulaire
data/         contenus modifiables
lib/          i18n et données structurées SEO
public/       logo officiel et carte de partage
types/        types TypeScript partagés
```

## Modifier le contenu

- Projets : `data/projects.ts`
- Équipe : `data/team.ts`
- Partenaires confirmés : `data/partners.ts`
- Actualités vérifiées : `data/news.ts`
- Indicateurs et montants validés : `data/impact.ts`
- Textes de navigation et de pages : `data/content.ts`
- Domaines d’action : `data/actions.ts`

Chaque valeur visible existe en français et en arabe. Pour ajouter l’anglais plus tard, étendre le type `Locale`, puis ajouter les valeurs `en` aux jeux de données et aux routes.

### Ajouter une actualité

Ajouter une entrée dans `data/news.ts` avec un `slug` unique, un titre, un résumé, un contenu, une date ISO, une catégorie vérifiée et, si disponible, une image placée dans `public/`.

### Ajouter un partenaire

Ajouter une entrée dans `data/partners.ts` uniquement après confirmation officielle. Placer son logo autorisé dans `public/partners/` et indiquer son niveau réel.

### Ajouter un projet

Ajouter ses informations vérifiées dans `data/projects.ts`, puis créer ou adapter son rendu dans `components/content-page.tsx`. Ne publier aucun montant ou taux d’avancement sans validation.

## Formulaire de contact

Le formulaire réalise actuellement une validation locale et ne transmet aucune donnée. Pour activer l’envoi, connecter une route serveur à un service officiellement choisi par l’association, ajouter une politique de confidentialité et configurer les variables d’environnement dans l’hébergement.

## Paiements

Aucun paiement n’est actif. L’interface prévoit l’ajout ultérieur de CMI, Stripe ou PayPal seulement après validation des comptes, des mentions légales et du processus comptable.

## Déploiement sur Gheima

1. Connecter le dépôt GitHub dans le tableau de bord Gheima.
2. Choisir la branche `main` et laisser la détection automatique utiliser le `Dockerfile`.
3. Exposer le port `3000` si Gheima le demande.
4. Vérifier le build, le health check, les routes `/fr` et `/ar`, puis publier.
5. Conserver d’abord le sous-domaine `*.gheima.app` de préproduction.
6. Après vérification de l’usage actuel de `gheima.ma`, connecter de préférence `tafoukt.gheima.ma` ou `association.gheima.ma`, sans modifier le domaine principal.

Une fois le domaine personnalisé actif, définir `NEXT_PUBLIC_SITE_URL` avec son URL HTTPS dans l’environnement Gheima, puis redéployer afin que les URLs canoniques, le sitemap et les cartes sociales utilisent le bon domaine.

Les déploiements suivants sont déclenchés par les pushs sur `main`. Les Pull Requests peuvent utiliser des environnements d’aperçu si cette option est activée dans Gheima.
