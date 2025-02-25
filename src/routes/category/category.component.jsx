import { useState, useEffect } from 'react'
import { selectCategoriesMap, selectCategoriesIsLoading } from '../../store/categories/category.selector'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import ProductCard from '../../components/product-card/product-card.component'
import Spinner from '../../components/spinner/spinner.component'


import { CategoryContainer, Title } from './category.styles'


const Category = () => {
    const { category } = useParams()
    const categoriesMap = useSelector(selectCategoriesMap)
    const isLoading = useSelector(selectCategoriesIsLoading)
    const [products, setProducts] = useState(categoriesMap[category])

    useEffect(() => {
        setProducts(categoriesMap[category])
    }, [category, categoriesMap])


    return (
        <>
            <Title>{category.toUpperCase()}</Title>
            {isLoading ? (
                <Spinner />
            ) : (
                <CategoryContainer>
                    {products && products.map(product => <ProductCard key={product.id} product={product} />)}
                </CategoryContainer>
            )}
        </>

    )
}

export default Category