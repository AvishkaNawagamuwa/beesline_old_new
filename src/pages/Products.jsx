import { useState } from 'react'
import { motion } from 'framer-motion'
import { SearchX, Package, Leaf, CheckCircle } from 'lucide-react'
import Hero from '../components/Hero'
import ProductCard from '../components/ProductCard'
import { products, categories, filterProductsByCategory } from '../data/products'
import images from '../assets/images'

export default function Products() {
    const [selectedCategory, setSelectedCategory] = useState('all')
    const [searchQuery, setSearchQuery] = useState('')

    const filteredProducts = filterProductsByCategory(selectedCategory).filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.scientificName.toLowerCase().includes(searchQuery.toLowerCase())
    )

    return (
        <div className="pt-16">
            <Hero
                title="Our Premium Product Range"
                subtitle="GMP-certified herbal capsules for stress relief, weight management, and optimal wellness"
                bgImage={images.hero.product}
            />

            <section className="py-10">
                <div className="container-custom">
                    {/* Search and Filter Controls */}
                    <div className="mb-8">
                        <div className="flex flex-col lg:flex-row gap-4 mb-8">
                            {/* Search Box */}
                            <div className="flex-1">
                                <input
                                    type="text"
                                    placeholder="Search products..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all"
                                />
                            </div>

                            {/* Category Filter - Dropdown for mobile */}
                            <div className="lg:hidden">
                                <select
                                    value={selectedCategory}
                                    onChange={(e) => setSelectedCategory(e.target.value)}
                                    className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all"
                                >
                                    {categories.map(category => (
                                        <option key={category.id} value={category.value}>
                                            {category.label}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        {/* Category Filter Pills - Desktop */}
                        <div className="hidden lg:flex flex-wrap gap-3">
                            {categories.map(category => (
                                <button
                                    key={category.id}
                                    onClick={() => setSelectedCategory(category.value)}
                                    className={`px-6 py-2.5 rounded-lg font-medium transition-all duration-300 ${selectedCategory === category.value
                                        ? 'bg-gold text-white shadow-lg transform scale-105'
                                        : 'bg-beige text-gray-700 hover:bg-gold/20 hover:text-gold'
                                        }`}
                                >
                                    {category.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Results Count */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="mb-8"
                    >
                        <p className="text-gray-600">
                            Showing <span className="font-semibold text-gray-900">{filteredProducts.length}</span> product{filteredProducts.length !== 1 ? 's' : ''}
                        </p>
                    </motion.div>

                    {/* Products Grid */}
                    {filteredProducts.length > 0 ? (
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {filteredProducts.map((product) => (
                                <ProductCard
                                    key={product.id}
                                    product={product}
                                />
                            ))}
                        </div>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-center py-16"
                        >
                            <div className="mb-4 text-gray-400 flex justify-center">
                                <SearchX size={64} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-2xl font-semibold text-gray-900 mb-2">No products found</h3>
                            <p className="text-gray-600 mb-6">Try adjusting your search or filter to find what you're looking for.</p>
                            <button
                                onClick={() => {
                                    setSearchQuery('')
                                    setSelectedCategory('all')
                                }}
                                className="btn-primary"
                            >
                                Clear Filters
                            </button>
                        </motion.div>
                    )}
                </div>
            </section>

            {/* Info Section */}
            <section className="py-16 bg-beige/30">
                <div className="container-custom">
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-xl p-6 shadow-md"
                        >
                            <div className="mb-3 text-gold flex justify-center">
                                <CheckCircle size={40} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">GMP Certified</h3>
                            <p className="text-gray-600 text-sm">All products manufactured under strict quality standards</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="bg-white rounded-xl p-6 shadow-md"
                        >
                            <div className="mb-3 text-gold flex justify-center">
                                <Package size={40} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Export Ready</h3>
                            <p className="text-gray-600 text-sm">Available for bulk orders with international shipping</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-white rounded-xl p-6 shadow-md"
                        >
                            <div className="mb-3 text-gold flex justify-center">
                                <Leaf size={40} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">100% Natural</h3>
                            <p className="text-gray-600 text-sm">Pure herbal ingredients with no artificial additives</p>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    )
}
