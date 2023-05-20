module.exports = (sequelize, Sequelize) => {
    const formFieled = sequelize.define("formFieled", {
        form_id: {
            type: Sequelize.INTEGER(11),
            autoIncrement: true,
            primaryKey: true
        },
        title: {
            type: Sequelize.STRING(250),
            comment: 'for title fieled'
        },
        image: {
            type: Sequelize.STRING(250),
            comment: 'for title image'
        },
        discription: {
            type: Sequelize.STRING(250),
        },
        quantity: {
            type: Sequelize.DECIMAL(11),
            
        },
        price: {
            type: Sequelize.INTEGER(11),
        }, 
         date: {
            type: Sequelize.DATE(),
        },
    });
    return formFieled;
};