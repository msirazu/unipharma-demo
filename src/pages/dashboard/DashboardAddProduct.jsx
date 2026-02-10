import { Box, Button, MenuItem, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { saveProductDataToLocalStorage } from "../../utilities/productStorage";
import { toast } from "react-toastify";

const DashboardAddProduct = () => {
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [regPrice, setRegPrice] = useState('');
    const [disPrice, setDisPrice] = useState('');
    const [slug, setSlug] = useState('');
    const [type, setType] = useState('');
    const [typeQuantity, setTypeQuantity] = useState('');
    const [stockQuantity, setStockQuantity] = useState('');
    const [category, setCategory] = useState('');
    const [subCategory, setSubCategory] = useState('');
    const [brand, setBrand] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        const newProductsData = {
            id: crypto.randomUUID(),
            name,
            image,
            regPrice,
            disPrice,
            slug,
            type,
            typeQuantity,
            stockQuantity,
            category,
            subCategory,
            brand
        }
        saveProductDataToLocalStorage(newProductsData);
        toast.success('product added successfully');

        setName('');setImage('');setRegPrice('');setDisPrice('');setSlug('');setTypeQuantity('');setStockQuantity('');setCategory('');setSubCategory('');setBrand('');
    }

    const handleReset = () => {
        setName('');setImage('');setRegPrice('');setDisPrice('');setSlug('');setTypeQuantity('');setStockQuantity('');setCategory('');setSubCategory('');setBrand('');
    }

    return (
        <>
        <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#dddddd30'}}>
        <Box sx={{backgroundColor: '#ffffff', p: 2, width: '500px'}} component='section'>
            <form onSubmit={handleSubmit}>
            <Typography variant="h5" component='h2' sx={{mb: 2, textAlign: 'center', textTransform: 'capitalize'}}>
                create new product
            </Typography>
            <Stack spacing={2}>
            <TextField fullWidth required label='Product Name' placeholder="Enter Product Name" type="name" value={name} onChange={e => setName(e.target.value)}/>
            <TextField fullWidth required label='Product Slug' placeholder="Enter Product Slug" type="name" value={slug} onChange={e => setSlug(e.target.value)}/>
            <TextField value={image} sx={{width: '100%'}} required label='Image URL' placeholder="Enter Product Link" type="url" onChange={e => setImage(e.target.value)}/>
            <Stack direction='row' spacing={1}>
                <TextField value={regPrice} sx={{width: '100%'}} type="number" required label='Regular Price' placeholder="Enter Regular Price" onChange={e => setRegPrice(e.target.value)}/>
                <TextField sx={{width: '100%'}} type="number" required label='Discount Price' placeholder="Enter Discount Price" value={disPrice} onChange={e => setDisPrice(e.target.value)}/>
            </Stack>
            <Stack direction='row' spacing={1}>
                <TextField value={type} sx={{width: '100%'}} select label='Type' onChange={e => setType(e.target.value)}>
                    <MenuItem value='capsule'>Capsule</MenuItem>
                    <MenuItem value='tablet'>Tablet</MenuItem>
                    <MenuItem value='gram'>Gram</MenuItem>
                    <MenuItem value='kg'>KG</MenuItem>
                    <MenuItem value='piece'>Piece</MenuItem>
                </TextField>
                <TextField fullWidth required type="number" label='Quantity' placeholder="Enter Quantity" value={typeQuantity} onChange={e => setTypeQuantity(e.target.value)}/>
            </Stack>
            <Stack direction='row' spacing={1}>
                <TextField sx={{width: '100%'}} type="number" required label='Stock' placeholder="Stock Quantity" value={stockQuantity} onChange={e => setStockQuantity(e.target.value)}/>
                <TextField sx={{width: '100%'}} type="text" required label='Category' placeholder="Select Category" value={category} onChange={e => setCategory(e.target.value)}/>
            </Stack>
            <Stack direction='row' spacing={1}>
                <TextField sx={{width: '100%'}} type="text" required label='Brand' placeholder="Select Brand" value={brand} onChange={e => setBrand(e.target.value)}/>
                <TextField sx={{width: '100%'}} type="text" required label='Sub Category' placeholder="Select Sub Category" value={subCategory} onChange={e => setSubCategory(e.target.value)}/>
            </Stack>
            <Stack direction='row' spacing={1}>
            <Button sx={{py: 2, width: '50%'}} type="submit" variant="contained">save</Button>
            <Button sx={{py: 2, width: '50%'}} onClick={handleReset} variant="contained">clear</Button>
            </Stack>
            </Stack>
            </form>
            </Box>
        </Box>
        </>
    );
};

export default DashboardAddProduct;