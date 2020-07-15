import express, { Router } from 'express';

import { Queries } from './queries';

const router: Router = express.Router();

router.get('/', async (req, res) => {
  try {
    const profiles: any[] = await Queries.getAllUserProfiles();

    return res.status(200).json(profiles);

  } catch (error) {

    res.status(500).json({ error: 'Internal Server Error' });

  }

});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const profile: any[] = await Queries.getUserProfileById(id);

    if (profile.length < 1) {

      return res.status(404).json({ message: 'Not Found' });

    } else {

      return res.status(200).json(profile);
    }
  } catch (error) {

    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.post('/', async (req, res) => {
  try {
    const profile = await Queries.addUserProfile(req.body);
    res.status(201).json(profile)

  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });

  };
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const profile = await Queries.getUserProfileById(id);

    if (!(profile.length < 1)) {
      await Queries.deleteUserProfileById(id);
      res.status(200).json({ message: 'User Profile removed Successfully' });
    } else {
      res.status(404).json({ message: 'User Profile not found' })
    }

  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// router.put('/:id', async (req, res) => {
//   try {
//     const { id } = req.body;

//     const profile = await userProfiles.getUserProfileById(id);

//     console.log('PROFILE', profile);


//     // if (!(profile.length < 1)) {
//     // const updateProfile = await userProfiles.updateUserProfileById({ profile });
//     // res.status(200).json(...updateProfile); // to destructure
//     // } else {
//     // res.status(404).json({ message: 'Bed not found' })
//     // }

//   } catch (error) {
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// })


export default router;
