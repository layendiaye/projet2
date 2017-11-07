
		function ajouter()
		{
			var produit=document.getElementById("prod").value;
			var qty=document.getElementById("q").value;
			localStorage.setItem(produit,qty); //pour stocker en local
			document.getElementById("prod").value="";//pour vider le champ produit.
			document.getElementById("q").value="";//pour vider le champ quantité.
		afficher();//charger cette fonction a chaque fois qu'on la fontion ajouter().on a plus besoin de faire un refresh de page.
		}
		function modifier()
		{
			var produit=document.getElementById("prod").value;
			document.getElementById("q").value=localStorage.getItem(produit);//on modifie la valeur qui est sur localstorage.on besoin du key pour recuper le value
		}
		function supprimer()
		{
			var produit=document.getElementById("prod").value;
			localStorage.removeItem(produit);//on supprime la le produit qui est sur localstorage.on a juste besoin du key
			document.getElementById("prod").value="";//vider
			afficher();//.on a plus besoin de faire un refresh de page.
		}
		function doClear()
		{
			localStorage.clear();
			afficher();//.on a plus besoin de faire un refresh de page./
		}
		function afficher(){ //afficher le tableau
			var key="";
			var paires="<tr class=\"first\"><td><b>produit</b></td><td><b>Quantité</b></td></tr>";/* le \...\
								pour empecher la fermeture juste avant first*/
								//<b> est une balse html=bold

			for(i=0;i<=localStorage.length-1;i++) //-1 car i est initialisé à 0
			{
				key=localStorage.key(i);
				paires+="<tr><td>"+key+"</td><td>"+localStorage.getItem(key)+"</td></tr>\n"; //+=pour ajouter une ligne
			}
			if(paires=="<tr class=\"first\"><td><b>produit</b></td><td><b>Quantité</b></td></tr>"){
				paires+="<tr><td><i>Vide</i></td><td><i>Vide</i></td></tr>";
				//<i> est une balise html=italic
			}
			document.getElementById('paires').innerHTML=paires;
		}
		