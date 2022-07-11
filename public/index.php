<!DOCTYPE html>

<?php
$pageTitle = "Burger bottom";
?>

<html lang="fr-ca">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../style/normalize.css">
    <link rel="stylesheet" href="../style/style.css">
    <title>burger bottom</title>

    
</head>
<body>

    <!-- Appelle le header.php -->
    <?php 
    include "_header.php";
    ?>

    <main>
        <section>
            <h3>Découvrez <br> les meilleurs burgers de l'île de montréal</h3>
            <p>Burger bottom est apprécié de ca clientèle depuis 1970 et est la pour rester.</p>
            <div class="container">
                <h3 class="title">Menu</h3>
                <div class="container-photo-menu"><img src="../style/img/hamburger-photo-by-Niekverkaan.jpg" alt=""></div>
                <p>Preparez-vous pour une toute nouvelle experience fast food.</p>
                <a class="section-button" href="menu.php">Voir le menu</a>
            </div>
            <div class="container">
                <h3 class="title">Contact</h3>
                <div class="container-photo-menu"><img src="../style/img/location-photo-by-Madun_Digital.jpg" alt=""></div>
                <p>Si vous souhaitez venir ou nous contacter.</p>
                <a class="section-button" href="contact.php">Les contacts</a>
            </div>
        </section>
        <section>
            <h3>Évaluation des clients</h3>
            <button id="gauche"><</button>
            <button id="droit">></button>
            <div class="slider">
                <div class="slide">
                    <h5>5/5</h5>
                    <p>Magnifique, l'ambiance est excellente et la bouffe est délicieuse.</p>
                </div>
                <div class="slide">
                    <h5>Meilleur burger que j'ai mangé</h5>
                    <p>Wow, cet endroit est le real deal! Je n'avais pas mangé comme ca depuis longtemps.</p>
                </div>
            </div>
        </section>
    </main>

    <!-- Appelle le footer.php -->
    <?php
    include "_footer.php"
    ?>

    <script src="../dist/main.js"></script>
</body>
</html>