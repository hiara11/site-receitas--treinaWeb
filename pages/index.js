import Header from '../componets/Header/Header';
import Footer from '../componets/Footer/Footer';
import RecipeCard from '../componets/RecipeCard/RecipeCard';

export default function Index(){
  return (
    <div>
      <Header title="TreinaCook - Receitas"/>
        <main>
          <RecipeCard  
            name="Brigadeiro"
            category="Doce"
            picture="https://img.itdg.com.br/tdg/images/recipes/000/190/665/274343/274343_original.jpg?mode=crop&width=710&height=400"
            link="/receitas/doce/Brigadeiro"
          />
           <RecipeCard 
            name="Bolo de cenoura"
            category="Bolos"
            picture="https://w7.pngwing.com/pngs/927/160/png-transparent-carrot-cake-twilight-sparkle-food-birthday-cake-pound-cake-cartoon-sandwich-food-orange-cutie-mark-crusaders-thumbnail.png"
            link="/receitas/bolos/BoloCenoura"
          />
           <RecipeCard 
            name="Bolinho de chuva"
            category="café da tarde"
            picture="https://vovopalmirinha.com.br/wp-content/uploads/2020/03/vovo-palmirinha-bolinho-de-chuva-702x336.jpg"
            link="/receitas/cafeTarde/BolinhoChuva"
          /> 
          <RecipeCard  
          name="Molho branco"
          category="Molhos"
          picture="https://static.clubedaanamariabraga.com.br/wp-content/uploads/2020/11/molho-branco-classico-1024x576.jpg"
          link="/receitas/molhos/MolhoBranco"
          />
        </main>
      <Footer />
    </div>
  ) 
}