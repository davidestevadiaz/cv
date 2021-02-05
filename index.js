/*Informacion de los iconos*/
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})


var app = new Vue({
    el: '#app',
    español:true,
    data: {
        datos: null,
        español:true,
        show:false,
        mostrarEs:true,
        
        //español
        navMenuEs:[],
        sobreMi:[],
        redesSociales:[],
        estudiosEs:[],
        trabajosEs:[],
        proyectosDesarrolladosEs:[],
        idiomaEs:[],
        destrezas:[],
        opinionesEs:[],


        //ingles
        navMenuEn:[],
        estudiosEn:[],
        trabajosEn:[],
        proyectosDesarrolladosEn:[],
        opinionesEn:[]
    },
    mounted(){
        this.cargarDatos();
        
    },

    methods:{
        cargarDatos:function(){
            axios.get("./datos.json").then((result) => {
                console.log("ya")
                this.show=true;
                this.datos=result.data;

                $(".loading").hide();
                
                //español
                this.contenidoEs();
    
                //ingles
                this.contenidoEn();
                
            })
        },
        cambiarIdioma: function(){
            this.español=!this.español;
            this.mostrarEs=!this.mostrarEs;
        },

        //español

        contenidoEs: function(){
            if(this.datos)
               this.navMenuEs= this.datos.español[0].menu; 
               this.sobreMi= this.datos.español[0].sobre[0];
               this.redesSociales=this.datos.español[0].sobre[1].redes;
               this.estudiosEs=this.datos.español[0].educacion;
               this.trabajosEs=this.datos.español[0].experiencia;
               this.proyectosDesarrolladosEs=this.datos.español[0].proyectos;
               this.destrezas=this.datos.español[0].habilidades;
               this.idiomaEs=this.datos.español[0].idiomas;
               this.opinionesEs=this.datos.español[0].referencias;
        },


        //Ingles

        contenidoEn:function(){
            if(this.datos)
               this.navMenuEn= this.datos.ingles[0].menu;     
               this.estudiosEn=this.datos.ingles[0].educacion;    
               this.trabajosEn=this.datos.ingles[0].experiencia;  
               this.proyectosDesarrolladosEn=this.datos.ingles[0].proyectos;
               this.idiomaEn=this.datos.ingles[0].idiomas;
               this.opinionesEn=this.datos.ingles[0].referencias;
        }

    },
    computed:{
        
        nombre: function(){
            if(this.datos){
                return this.datos.español[0].nombre[0];
            }
        },

        //español

        introduccionEs: function(){
            if(this.datos){
                return this.datos.español[0].introduccion[0];
            }
        },
        educEs: function(){
            if(this.datos){
                return this.datos.español[0].titulos[0];
            }
        },
        expeEs: function(){
            if(this.datos){
                return this.datos.español[0].titulos[1];
            }
        },
        proyEs: function(){
            if(this.datos){
                return this.datos.español[0].titulos[2];
            }
        },
        habiEs: function(){
            if(this.datos){
                return this.datos.español[0].titulos[3];
            }
        },
        idioEs: function(){
            if(this.datos){
                return this.datos.español[0].titulos[4];
            }
        },
        refeEs: function(){
            if(this.datos){
                return this.datos.español[0].titulos[5];
            }
        },
        footerEs: function(){
            if(this.datos){
                return this.datos.español[0].footer;
            }
        },
        //ingles

        introduccionEn: function(){
            if(this.datos){
                return this.datos.ingles[0].introduccion[0]
            }
        },
        educEn: function(){
            if(this.datos){
                return this.datos.ingles[0].titulos[0];
            }
        },
        expeEn: function(){
            if(this.datos){
                return this.datos.ingles[0].titulos[1];
            }
        },
        proyEn: function(){
            if(this.datos){
                return this.datos.ingles[0].titulos[2];
            }
        },
        habiEn: function(){
            if(this.datos){
                return this.datos.ingles[0].titulos[3];
            }
        },
        idioEn: function(){
            if(this.datos){
                return this.datos.ingles[0].titulos[4];
            }
        },
        refeEn: function(){
            if(this.datos){
                return this.datos.ingles[0].titulos[5];
            }
        },
        footerEn: function(){
            if(this.datos){
                return this.datos.ingles[0].footer;
            }
        }

    }
})


